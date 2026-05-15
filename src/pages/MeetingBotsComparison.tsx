import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import ChevronDownIcon from "@/assets/chevron-down.svg?react";
import { detectDownloadPlatform, handleDownload } from "@/utils/downloads";

type Support = "yes" | "no" | "partial" | "unknown";

type CardFeatureKey =
  | "freeTrial"
  | "realTimeAnswers"
  | "invisibleToOthers"
  | "runsLocally"
  | "noDataShared"
  | "worksOnAnyMeeting";

interface Competitor {
  name: string;
  pricingShort: string;
  /** Full pricing detail for methodology footnote. */
  pricing: string;
  featured?: boolean;
  featuredBadge?: string;
  freeTrial: Support;
  realTimeAnswers: Support;
  invisibleToOthers: Support;
  runsLocally: Support;
  noDataShared: Support;
  worksOnAnyMeeting: Support;
}

// NOTE: edit these cells freely — they're best-effort based on public info.
// "unknown" renders as an em-dash so empty cells stay visually neutral.
const COMPETITORS: Competitor[] = [
  {
    name: "Hovrlay",
    pricingShort: "Credit packs from ₹899 / 3 credits",
    pricing:
      "Credit packs (e.g. ₹899 / 3 credits, ₹1,999 / 8, ₹3,999 / 20 on hovrlay.com pricing)",
    featured: true,
    featuredBadge: "Most affordable",
    freeTrial: "yes",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    runsLocally: "yes",
    noDataShared: "yes",
    worksOnAnyMeeting: "yes"
  },
  {
    name: "ParakeetAI",
    pricingShort: "From about $29.50 for 3 interview credits",
    pricing:
      "Pay-per-use credits from about $29.50 (e.g. 3 interview credits); subscriptions quoted after signup (parakeet-ai.com)",
    freeTrial: "no",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    runsLocally: "yes",
    noDataShared: "yes",
    worksOnAnyMeeting: "yes"
  },
  {
    name: "Cluely",
    pricingShort: "Starter $0; Pro about $19.99/mo",
    pricing:
      "Starter $0; Pro about $19.99/mo; higher tiers about $149.99/mo (cluely.com/pricing)",
    freeTrial: "yes",
    realTimeAnswers: "yes",
    invisibleToOthers: "yes",
    runsLocally: "yes",
    noDataShared: "yes",
    worksOnAnyMeeting: "yes"
  },
  {
    name: "Granola",
    pricingShort: "Basic $0; Business $14/user/mo",
    pricing:
      "Basic $0/user/mo; Business $14/user/mo; Enterprise from $35/user/mo (granola.ai/pricing)",
    freeTrial: "no",
    realTimeAnswers: "partial",
    invisibleToOthers: "yes",
    runsLocally: "yes",
    noDataShared: "partial",
    worksOnAnyMeeting: "yes"
  },
  {
    name: "Otter",
    pricingShort: "Basic $0; Pro about $16.99/mo user",
    pricing:
      "Basic $0; Pro about $16.99/mo user ($8.33/mo billed annually); Business about $30/mo user ($19.99/mo annual); Enterprise custom (otter.ai pricing)",
    freeTrial: "no",
    realTimeAnswers: "no",
    invisibleToOthers: "no",
    runsLocally: "no",
    noDataShared: "no",
    worksOnAnyMeeting: "partial"
  },
  {
    name: "Fireflies AI",
    pricingShort: "About $9–39/mo, credit-based",
    pricing:
      "Paid tiers about $9/mo (Basic) through $39/mo (Premium), credit-based; starter allotments vary (ophyai.com/us/pricing)",
    freeTrial: "no",
    realTimeAnswers: "partial",
    invisibleToOthers: "no",
    runsLocally: "no",
    noDataShared: "no",
    worksOnAnyMeeting: "partial"
  }
];

const FEATURE_ROWS: { key: CardFeatureKey; label: string }[] = [
  { key: "freeTrial", label: "Free trial" },
  { key: "realTimeAnswers", label: "Real-time answers" },
  { key: "invisibleToOthers", label: "Invisible to others" },
  { key: "runsLocally", label: "Runs locally" },
  { key: "noDataShared", label: "No data shared" },
  { key: "worksOnAnyMeeting", label: "Any meeting" }
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

const ComparisonLegend = () => (
  <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
    {(["yes", "no", "partial"] as const).map((key) => {
      const { label, className } = PILL_STYLES[key];
      return (
        <span key={key} className="inline-flex items-center gap-2">
          <span
            className={`inline-flex min-w-[3rem] items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
          >
            {label}
          </span>
          <span className="font-light">
            {key === "yes" ? "Supported" : key === "no" ? "Not supported" : "Limited support"}
          </span>
        </span>
      );
    })}
  </div>
);

const ComparisonCard = ({ competitor }: { competitor: Competitor }) => {
  const featured = competitor.featured === true;

  return (
    <article
      className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm ${
        featured
          ? "border-[#1337B6] ring-2 ring-[#1337B6]/20 bg-[#1337B6]/[0.02]"
          : "border-gray-200"
      }`}
    >
      {featured && competitor.featuredBadge && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-[#1337B6] px-2.5 py-0.5 text-xs font-medium text-white">
          {competitor.featuredBadge}
        </span>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-gray-900">{competitor.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm font-light leading-snug text-gray-600">
        {competitor.pricingShort}
      </p>
      <ul className="mt-5 flex flex-1 flex-col gap-3 border-t border-gray-100 pt-4">
        {FEATURE_ROWS.map((row) => (
          <li key={row.key} className="flex items-center justify-between gap-3 text-sm">
            <span className="font-light text-gray-700">{row.label}</span>
            <SupportPill value={competitor[row.key]} />
          </li>
        ))}
      </ul>
    </article>
  );
};

const COMPARISON_FAQS = [
  {
    question: "Will anyone see that I'm using Hovrlay?",
    answer:
      "No. Hovrlay runs as a local overlay on your machine. It does not join the call as a participant, does not appear in the participant list, and is not visible in typical screen shares."
  },
  {
    question: "Why doesn't Hovrlay join as a bot?",
    answer:
      "Joining as a bot is the easiest way to capture meeting audio in the cloud, but everyone in the room can see it. Hovrlay listens to audio already on your computer and shows help only to you, so the call itself stays unchanged."
  },
  {
    question: "Is this the same as Otter or Granola?",
    answer:
      "Otter and Granola share meeting notes and transcripts after the call. Hovrlay is built for real time help during the conversation without a visible bot in the room."
  },
  {
    question: "How often is this comparison updated?",
    answer: (
      <>
        We review public pricing pages and product docs periodically. Features change. If something
        here looks wrong, email{" "}
        <a
          href="mailto:support@hovrlay.com"
          className="text-[#1337B6] underline-offset-2 hover:underline"
        >
          support@hovrlay.com
        </a>{" "}
        and we'll fix it.
      </>
    )
  }
];

const BlogFaqItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  isLast
}: {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) => (
  <div className={isLast ? "" : "border-b border-gray-200"}>
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 py-4 text-left"
    >
      <span className="text-base font-medium text-gray-900">{question}</span>
      <ChevronDownIcon
        className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <p className="pb-4 text-sm font-light leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  </div>
);

const MeetingBotsComparison = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const platform = detectDownloadPlatform();

  return (
    <div className="w-full text-gray-800">
      <section id="overview" className="scroll-mt-28">
        <p className="mb-5 text-base leading-relaxed font-light">
          Most meeting assistants today work the same way. They join the call as a guest, take a
          camera slot and quietly record everyone in the room. After the call ends, they show you
          the transcripts and summaries. That's a design choice, not a requirement. It just happens
          to be the easiest one to ship.
        </p>
        <p className="mb-5 text-base leading-relaxed font-light">
          Hovrlay takes the opposite approach. It runs on your machine as a downloadable app,
          listens to microphone audio and the system audio that your computer is already playing and shows you
          transcripts and answers in an overlay only you can see. No bot appears in the
          participant list. No meeting link is needed. No third party gets a copy of the meeting. It 
          provides you tailored help during the call in real time, rather than create summaries after the meeting ends.
        </p>
        <p className="mb-8 text-base leading-relaxed font-light">
          Here's how that compares to the tools people most often ask us about.
        </p>
      </section>

      <section id="two-approaches" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Two ways AI Assistants work
        </h2>
        <p className="mb-8 text-base leading-relaxed font-light">
          Most tools join your meeting as a participant. Hovrlay runs on your machine as a transparent invisible overlay and gives you real time help during the call.
        </p>
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Meeting bot
            </h3>
            <p className="mb-3 text-sm font-medium text-gray-900">Otter, Fireflies AI</p>
            <ul className="space-y-2 text-sm font-light leading-relaxed text-gray-700">
              <li>Joins as a guest participant</li>
              <li>Visible in the participant list</li>
              <li>Often needs a calendar invite or meeting link</li>
              <li>Audio processed in the cloud</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#1337B6]/30 bg-[#1337B6]/[0.04] p-5">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1337B6]">
              Local overlay
            </h3>
            <p className="mb-3 text-sm font-medium text-gray-900">
              Hovrlay, Cluely, Granola, ParakeetAI
            </p>
            <ul className="space-y-2 text-sm font-light leading-relaxed text-gray-700">
              <li>Runs on your machine</li>
              <li>Not in the call's participant list</li>
              <li>Works on ad-hoc meetings and any audio source</li>
              <li>Help shown only to you — real-time for most overlay tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="what-we-compared" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          What we compared
        </h2>
        <p className="mb-4 text-base leading-relaxed font-light">
          Each card below scores tools on the things buyers usually care about first: whether you
          can try it free, whether help arrives during the call, whether anyone else can tell
          you're using it, and whether your meeting audio leaves your machine. We left
          implementation details like "joins as a bot" to the section above — the cards focus on
          outcomes.
        </p>

      </section>

      <section id="comparison" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Tool comparison
        </h2>
        <ComparisonLegend />
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPETITORS.map((competitor) => (
            <ComparisonCard key={competitor.name} competitor={competitor} />
          ))}
        </div>
        <details className="mb-4 rounded-xl border border-gray-100 bg-gray-50/50 px-4 py-3 text-sm">
          <summary className="cursor-pointer font-medium text-gray-700">
            Full pricing notes
          </summary>
          <ul className="mt-3 space-y-2 font-light text-gray-600">
            {COMPETITORS.map((c) => (
              <li key={c.name}>
                <span className="font-medium text-gray-800">{c.name}:</span> {c.pricing}
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section id="takeaways" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          What stands out
        </h2>
        <p className="mb-5 text-base leading-relaxed font-light">
          <span className="font-medium text-gray-900">Local overlay tools</span> — Hovrlay,
          Cluely, ParakeetAI, and Granola — share the same core idea: nothing joins your call as a
          guest. They differ on pricing (credits vs subscriptions), interview focus, and how much
          happens in real time. Granola leans post-meeting; Hovrlay and ParakeetAI emphasize live
          help during the conversation.
        </p>
        <p className="mb-8 text-base leading-relaxed font-light">
          <span className="font-medium text-gray-900">Meeting bots</span> — Otter and Ophy AI —
          are built for visibility and shared notes. That's the right tradeoff when everyone should
          know a recorder is in the room and you want a team transcript in the cloud afterward.
        </p>
      </section>

      <section id="which-to-pick" className="scroll-mt-28">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          Which fits your call
        </h2>
        <p className="mb-5 text-base leading-relaxed font-light">
          <span className="font-medium text-gray-900">Choose a meeting bot</span> when you need
          shared notes, async review, or a recording everyone understands is happening — team
          standups, customer calls with consent, or compliance-friendly archives.
        </p>
        <p className="mb-8 text-base leading-relaxed font-light">
          <span className="font-medium text-gray-900">Choose a local overlay</span> when you need
          help during the call without changing how the room looks — interviews, negotiations, or
          any conversation where a visible guest would shift the dynamic. That's the problem
          Hovrlay is built for.
        </p>
      </section>

      <section id="faq" className="scroll-mt-28">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900">FAQ</h2>
        <div className="mb-10">
          {COMPARISON_FAQS.map((faq, index) => (
            <BlogFaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              isLast={index === COMPARISON_FAQS.length - 1}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetingBotsComparison;
