const cluelyLogo = "/logos/cluely.svg";
const firefliesLogo = "/logos/fireflies.svg";
const granolaLogo = "/logos/granola.svg";
const hovrlayLogo = "/logos/hovrlay.svg";
const otterLogo = "/logos/otter.svg";
const parakeetLogo = "/logos/parakeet.webp";

type Support = "yes" | "no" | "partial" | "unknown";

type PillFeatureKey = "realTimeAnswers" | "invisibleToOthers" | "freeTrial";

interface Competitor {
  name: string;
  logo: string;
  pricingShort: string;
  freeTrial: Support;
  realTimeAnswers: Support;
  invisibleToOthers: Support;
  description: string;
}

// NOTE: edit these cells freely — they're best-effort based on public info.
// "unknown" renders as an em-dash so empty cells stay visually neutral.
const INVISIBLE_OVERLAY_COMPETITORS: Competitor[] = [
  {
    name: "Hovrlay",
    logo: hovrlayLogo,
    pricingShort: "$2.5/hour",
    freeTrial: "yes",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    description: "Focused on live interview assistance"
  },
  {
    name: "Cluely",
    logo: cluelyLogo,
    pricingShort: "$150/mo",
    freeTrial: "yes",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    description: "Focusing more on Sales assistance"
  },
  {
    name: "ParakeetAI",
    logo: parakeetLogo,
    pricingShort: "$6/hour",
    freeTrial: "no",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    description: "Built solely for coding interviews"
  }
];

const GRANOLA_COMPETITOR: Competitor = {
  name: "Granola",
  logo: granolaLogo,
  pricingShort: "$14/mo",
  freeTrial: "no",
  realTimeAnswers: "partial",
  invisibleToOthers: "yes",
  description: "More focused on personal notes than live assistance"
};

const TRADITIONAL_MEETING_BOT_COMPETITORS: Competitor[] = [
  {
    name: "Otter",
    logo: otterLogo,
    pricingShort: "$17/mo",
    freeTrial: "partial",
    realTimeAnswers: "no",
    invisibleToOthers: "no",
    description: "Built primarily around transcripts and summaries"
  },
  {
    name: "Fireflies AI",
    logo: firefliesLogo,
    pricingShort: "$18/mo",
    freeTrial: "partial",
    realTimeAnswers: "partial",
    invisibleToOthers: "no",
    description: "Focused on async workflows and post call automations"
  }
];

const PILL_FEATURE_ROWS: { key: PillFeatureKey; label: string }[] = [
  { key: "realTimeAnswers", label: "Real time assistance" },
  { key: "invisibleToOthers", label: "Invisible to others" },
  { key: "freeTrial", label: "Free Trial" }
];

const PILL_STYLES: Record<Support, { label: string; className: string }> = {
  yes: { label: "Yes", className: "text-emerald-700 bg-emerald-50" },
  no: { label: "No", className: "text-gray-700 bg-gray-50" },
  partial: { label: "Partial", className: "text-amber-700 bg-amber-50" },
  unknown: { label: "—", className: "text-gray-400 bg-transparent" }
};

const SupportPill = ({ value }: { value: Support }) => {
  const { label, className } = PILL_STYLES[value];
  return (
    <span
      className={`inline-flex min-w-[3rem] shrink-0 items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
};

const ComparisonCard = ({ competitor }: { competitor: Competitor }) => {
  return (
    <article className="relative flex flex-col rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-3 shadow-sm">
      <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-gray-900">
        <img
          src={competitor.logo}
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 shrink-0 rounded-xs object-contain"
          decoding="async"
        />
        <span>{competitor.name}</span>
      </h3>
      <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-gray-100 pt-4 pb-2">
        {PILL_FEATURE_ROWS.map((row) => (
          <li key={row.key} className="flex items-center justify-between gap-3 text-sm">
            <span className="font-light text-gray-700">{row.label}</span>
            <SupportPill value={competitor[row.key]} />
          </li>
        ))}
        <li className="flex items-start justify-between gap-3 text-sm">
          <span className="shrink-0 font-light text-gray-700">Price</span>
          <span className="text-right font-light text-gray-700">{competitor.pricingShort}</span>
        </li>
      </ul>
      <p className="mt-2 border-t border-gray-100 pt-2 text-xs font-light leading-snug text-gray-600">
        {competitor.description}
      </p>
    </article>
  );
};

const MeetingBotsComparison = () => {
  return (
    <div className="w-full text-gray-800">
      <section id="overview" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Traditional Meeting Bots
        </h2>
        <p className="mb-5 text-base leading-relaxed font-light">
          A lot of the meeting assistants work the same way even in 2026. They join the call as a guest, take a
          camera slot and record everyone in the room. After the call ends, they show you
          the transcripts and summaries. That's a design choice, not a requirement.
        </p>
        <p className="mb-8 text-base leading-relaxed font-light">
          That architecture makes sense for async workflows like meeting notes, searchable transcripts and compliance records. 
          But interviews, sales calls, negotiations and high pressure conversations create a different set of constraints. Latency matters. 
          Visibility matters. Whether another participant can tell you're using a tool matters. In those situations, real time assistance 
          becomes a fundamentally different problem from post call summarization.
        </p>
      </section>

      <section id="invisible-overlays" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Invisible Overlays
        </h2>
        <p className="mb-5 text-base leading-relaxed font-light">
          Over the last two years, a second category of AI meeting assistants started emerging around that idea — Invisible Overlays. 
          Instead of joining the call as a participant, they run directly on the user's machine as an invisible overlay and provide contextual assistance 
          during the conversation itself.
        </p>
        <p className="mb-8 text-base leading-relaxed font-light">
          No participant joins the meeting. No meeting link is needed. The assistant exists entirely within the user's own machine and reacts to the conversation 
          as it unfolds, instead of processing it later. Other participants cannot tell you're using a tool.
        </p>
      </section>

      <section id="comparison" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Tool comparison
        </h2>
        <div className="mb-16 space-y-12">
          <div>
            <p className="mb-4 ml-1 text-sm font-medium tracking-tight text-gray-500">Invisible overlays</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INVISIBLE_OVERLAY_COMPETITORS.map((competitor) => (
                <ComparisonCard key={competitor.name} competitor={competitor} />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-4">
              <p className="ml-1 text-sm font-medium tracking-tight text-gray-500 lg:col-span-2">
                Traditional meeting bots
              </p>
              <p className="ml-1 text-sm font-medium tracking-tight text-gray-500">Hybrid assistants</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TRADITIONAL_MEETING_BOT_COMPETITORS.map((competitor) => (
                <ComparisonCard key={competitor.name} competitor={competitor} />
              ))}
              <ComparisonCard competitor={GRANOLA_COMPETITOR} />
            </div>
          </div>
        </div>
      </section>

      <section id="which-to-pick" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Why both still exist
        </h2>
        <p className="mb-5 text-base leading-relaxed font-light">
          Meeting bots and invisible overlays are ultimately solving different problems.
        </p>
        <p className="mb-5 text-base leading-relaxed font-light">
          A traditional meeting bot is optimized for memory. It records conversations, extracts insights from transcripts, generates summaries and pushes information into the user's workflow after the call ends. That model works well for team standups, customer calls, internal documentation and any collaborative environment where everyone understands the meeting is being recorded.
        </p>
        <p className="mb-5 text-base leading-relaxed font-light">
          Invisible overlays optimize for live contextual assistance during the conversation itself. They are designed for situations where latency matters, where another visible participant would change the social dynamic of the room or where the conversation is happening too quickly for post call summaries to be useful. Interviews, sales conversations, negotiations and high pressure calls tend to fall into that category.
        </p>
      <p className="mb-5 text-base leading-relaxed font-light">
        They reflect two different philosophies of what an AI meeting assistant is supposed to do.
      </p>
      </section>
    </div>
  );
};

export default MeetingBotsComparison;
