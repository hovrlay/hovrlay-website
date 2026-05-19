import type { ReactNode } from "react";
import Link from "next/link";

const proseLink =
  "font-light text-[#0099CC] underline underline-offset-2";

const Callout = ({
  variant,
  children,
}: {
  variant: "success" | "warning";
  children: ReactNode;
}) => (
  <div
    className={`my-6 rounded-lg border px-4 py-3 text-md font-light leading-relaxed [&_strong]:font-semibold ${
      variant === "success"
        ? "border-emerald-200/80 bg-emerald-50/80 text-gray-800"
        : "border-red-200/80 bg-red-50/80 text-gray-800"
    }`}
  >
    {children}
  </div>
);

const h2Class =
  "scroll-mt-28 mt-12 mb-3 text-2xl font-semibold tracking-tight text-gray-900";
const h3Class =
  "scroll-mt-28 mt-8 mb-3 text-xl font-semibold tracking-tight text-gray-900";
const pClass = "mb-5 text-base leading-relaxed font-light [&_strong]:font-semibold";

const SupportedAppsUndetectability = () => {
  return (
    <div className="w-full text-gray-800">
      <section id="overview" className="scroll-mt-28">
      <p className={pClass}>
        This guide will walk you through supported apps. Please also note the{" "}
        <Link href="/blog/system-requirements" className={proseLink}>
          system requirements
        </Link>{" "}
        (no Windows 10 or older pre-2023 Windows 11 devices), before downloading.
      </p>
      <p className={pClass}>
        To enable undetectability, open Hovrlay&apos;s Settings, under the General tab,
        turn on the undetectability toggle.
      </p>
      <div className="my-8 overflow-hidden rounded-xl border border-gray-200">
        <img
          src="/undetectability-settings.jpg"
          alt="Hovrlay settings with undetectability toggle enabled"
          width={2388}
          height={1592}
          className="h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <Callout variant="success">
        <p className="m-0">
          Once undetectable mode is on, Hovrlay&apos;s Assist keybinds are also
          undetectable to browsers. The default assist key binds are <strong>CMD Enter</strong> on
          Mac and <strong>CTRL Enter</strong> on Windows.
        </p>
      </Callout>
      <Callout variant="warning">
        <p className="m-0">
          Click events, regardless of undetectable mode, will be detected by active
          browser checkers. <strong>Do not click into Hovrlay. Only use the undetectable
          key binds</strong>. You can review and modify the keybinds in Settings for
          triggering Assist, response scrolling and more.
        </p>
      </Callout>
      </section>

      <h2 id="how-to-test" className={h2Class}>
        How to Test Undetectability
      </h2>
      <p className={pClass}>
        If you need to test undetectability for your device, simply turn undetectability
        mode on and take a screenshot of your entire screen.
      </p>
      <p className={pClass}>
        If Hovrlay is visible in your screenshot, your system is not compatible (Windows
        10, Macs from before 2022). If Hovrlay is invisible in your screenshot, it will be
        undetectable in ALL supported meeting softwares.
      </p>
      <h2 id="conferencing-software" className={h2Class}>
        Undetectability for Conferencing Software
      </h2>
      <p className={pClass}>
        Our latest version includes: invisible to screenshares, supports
        real-time audio transcription, invisible to dock, customizable keyboard shortcuts
        and 13+ other advanced stealth features. Each feature is specifically
        designed to counter detection methods used by interview platforms.
      </p>

      <h3 id="zoom" className={h3Class}>
        Zoom: Not Undetectable by Default
      </h3>
      <p className={pClass}>
        You&apos;ll need to either use Zoom version 6.16 or older, or turn on{" "}
        <a
          href="https://support.zoom.us/hc/en/article?id=zm_kb&sysparm_article=KB0063824#:~:text=Advanced%20capture%20with%20window%20filtering,from%20the%20Zoom%20desktop%20app"
          target="_blank"
          rel="noopener noreferrer"
          className={proseLink}
        >
          Advanced capture with window filtering
        </a>{" "}
        in your Zoom settings. This is important to make sure everything works smoothly.
        We&apos;ve thoroughly tested this and can confirm it works perfectly as long as
        you pass basic compatibility checks on your device first.
      </p>

      <h3 id="codesignal" className={h3Class}>
        CodeSignal
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="amazon-chime" className={h3Class}>
        Amazon Chime
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="coderpad" className={h3Class}>
        CoderPad
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="codility" className={h3Class}>
        Codility
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="lark-feishu" className={h3Class}>
        Lark/Feishu
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="hackerrank" className={h3Class}>
        HackerRank
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="google-meet" className={h3Class}>
        Google Meet
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="microsoft-teams" className={h3Class}>
        Microsoft Teams
      </h3>
      <p className={pClass}>
        Hovrlay is not undetectable to Microsoft Teams&apos;{" "}
        <strong>entire screen share</strong>. Hovrlay is known to be detectable on Windows
        10 and Windows 11 Home when sharing entire screen.
      </p>

      <h3 id="cisco-webex" className={h3Class}>
        Cisco WebEx
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="slack-huddle" className={h3Class}>
        Slack Huddle
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="ring-central" className={h3Class}>
        Ring Central
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="apollo-dialer" className={h3Class}>
        Apollo Dialer
      </h3>
      <p className={pClass}>
        Undetectable unless system requirements are not met. We&apos;ve thoroughly tested
        this and can confirm it works.
      </p>

      <h3 id="facetime" className={h3Class}>
        FaceTime
      </h3>
      <p className={pClass}>Undetectable unless system requirements are not met. We've thoroughly tested this and can confirm it works.</p>

      <h3 id="not-undetectable-for" className={h3Class}>
        Hovrlay is NOT Undetectable For...
      </h3>
      <Callout variant="warning">
        <p className="m-0">
          Hovrlay will be detected and is NOT undetectable for{" "}
          <strong>
            Proctor360, Proctorio, Honorlock, Meazure Learning, Examity, Respondus
            LockDown Browser, ProctorExam, Mercer Mettl, and PSI Bridge
          </strong>
          .
        </p>
      </Callout>
    </div>
  );
};

export default SupportedAppsUndetectability;
