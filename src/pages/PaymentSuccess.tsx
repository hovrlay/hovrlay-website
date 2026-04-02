import { useEffect } from "react";
import SuccessCheckIcon from "@/assets/success-check.svg?react";

const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "Payment Successful | Hovrlay";
    window.location.href = "hovrlay://payment/success";
  }, []);

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
            <SuccessCheckIcon />
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
            Payment Successful
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-7">
            Your Call Credits have been added to your account.
          </p>

          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-[#111111] px-4 py-2 text-sm text-muted-foreground">
            <span
              className="status-spinner h-3.5 w-3.5 rounded-full border border-muted-foreground/30 border-t-muted-foreground"
              aria-hidden="true"
            />
            <span>Opening Hovrlay...</span>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground/80">
            If Hovrlay doesn't open automatically,{" "}
            <a
              href="hovrlay://payment/success"
              className="text-foreground hover:text-primary transition-colors duration-200 underline underline-offset-2"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
