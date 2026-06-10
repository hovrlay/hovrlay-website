"use client";

import { useEffect, useState } from "react";
import NotFound from "@/views/NotFound";
import SuccessCheckIcon from "@/assets/success-check.svg";

const CLOSE_DELAY = 3;

const AuthCallback = () => {
  const [shouldShow404, setShouldShow404] = useState(false);
  const [countdown, setCountdown] = useState(CLOSE_DELAY);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const error = searchParams.get("error");
    const code = searchParams.get("code");

    if (error || !code) {
      setShouldShow404(true);
      return;
    }

    document.title = "Authentication Successful | Hovrlay";

    const deeplinkUrl = `hovrlay://auth/callback?code=${code}`;
    window.location.href = deeplinkUrl;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.close();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (shouldShow404) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background px-5">
      <style>{`
        .check-circle {
          stroke-dasharray: 126;
          stroke-dashoffset: 126;
          animation: draw-stroke 0.65s ease-out forwards;
        }

        .check-mark {
          stroke-dasharray: 36;
          stroke-dashoffset: 36;
          animation: draw-stroke 0.45s ease-out 0.25s forwards;
        }

        .status-spinner {
          animation: spin 0.8s linear infinite;
        }

        @keyframes draw-stroke {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center py-16">
        <div className="w-full text-center">
          <div className="mb-7 flex justify-center">
            <SuccessCheckIcon className="h-12 w-12 shrink-0" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-7">
            Authentication Successful
          </h1>

          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted px-4 py-2 text-sm text-muted-foreground">
            <span
              className="status-spinner h-3.5 w-3.5 rounded-full border border-muted-foreground/30 border-t-muted-foreground"
              aria-hidden="true"
            />
            <span>Opening Hovrlay...</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {countdown > 0
              ? `This window will close in ${countdown} second${countdown !== 1 ? "s" : ""}`
              : "Closing..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
