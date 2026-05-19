import type { ReactNode } from "react";

const strongInProse = "[&_strong]:font-semibold [&_strong]:text-gray-900";

const Callout = ({ children }: { children: ReactNode }) => (
  <div
    className={`my-6 rounded-lg border border-red-200/80 bg-red-50/80 px-4 py-3 text-md font-light leading-relaxed text-gray-800 ${strongInProse}`}
  >
    {children}
  </div>
);

const h2Class =
  "scroll-mt-28 mt-12 mb-3 text-xl font-semibold tracking-tight text-gray-900";
const pClass = `mb-5 text-base leading-relaxed font-light ${strongInProse}`;
const listClass = `mb-5 list-decimal space-y-2 pl-6 text-base font-light leading-relaxed ${strongInProse}`;
const ulClass = `mb-5 list-disc space-y-2 pl-6 text-base font-light leading-relaxed ${strongInProse}`;

const SystemRequirements = () => {
  return (
    <div className="w-full text-gray-800">
      <section id="compatibility" className="scroll-mt-28">
        <p className={pClass}>
          Hovrlay supports Windows 11 and Mac devices after 2023. We do not support any laptops with custom graphics as these are often incompatible with the latest version of Electron.
        </p>
        <h2 className={h2Class}>Compatibility</h2>
        <ol className={listClass}>
          <li>
            macOS <strong>Ventura</strong> and up
          </li>
          <li>Windows 11</li>
        </ol>
        <p className={pClass}>
          Hovrlay generally works with any laptop after 2022 that has a direct camera.
          Hovrlay <strong>does not support</strong> laptops with external webcams, custom
          graphics gaming cards, or certain international VPN configurations.
        </p>
      </section>

      <section id="windows-requirements" className="scroll-mt-28">
        <h2 className={h2Class}>Windows System Requirements</h2>
        <p className={pClass}>To use Hovrlay on Windows with an Intel processor, you need:</p>
        <ul className={ulClass}>
          <li>Windows 11 Pro or Home</li>
        </ul>
        <p className={pClass}>To use Hovrlay on Windows with an ARM processor, you need:</p>
        <ul className={ulClass}>
          <li>Windows 11 Pro or Home</li>
        </ul>
        <Callout>
          <p className="m-0">
            Hovrlay <strong>does not have support for Windows 10. </strong> The app might
            work, but is incompatible with Windows 10&apos;s audio, screen, and invisibility
            systems. As such, we cannot guarantee support for Windows 10.
          </p>
        </Callout>
      </section>

      <section id="mac-requirements" className="scroll-mt-28">
        <h2 className={h2Class}>Mac System Requirements</h2>
        <p className={pClass}>To use Hovrlay on Mac, you need:</p>
        <ul className={ulClass}>
          <li>macOS Ventura 13 and up.</li>
        </ul>
      </section>

      <section id="general-compute" className="scroll-mt-28">
        <h2 className={h2Class}>General Compute Requirements</h2>
        <p className={pClass}>
          For general use, a 64-bit processor and at least 8GB of RAM are recommended.
        </p>
      </section>
    </div>
  );
};

export default SystemRequirements;
