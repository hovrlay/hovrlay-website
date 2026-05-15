type Support = "yes" | "no" | "partial" | "unknown";

interface Competitor {
  name: string;
  /** Short summary; amounts from each vendor’s public pricing pages (USD unless noted). */
  pricing: string;
  freeTrial: Support;
  joinsAsBot: Support;
  visibleToOthers: Support;
  runsLocally: Support;
  worksOnAnyMeeting: Support;
  needsCalendarOrLink: Support;
}

// NOTE: edit these cells freely — they're best-effort based on public info.
// "unknown" renders as an em-dash so empty cells stay visually neutral.
const COMPETITORS: Competitor[] = [
  {
    name: "Hovrlay",
    pricing: "Credit packs (e.g. ₹899 / 3 credits, ₹1,999 / 8, ₹3,999 / 20 on hovrlay.com pricing)",
    freeTrial: "yes",
    joinsAsBot: "no",
    visibleToOthers: "no",
    runsLocally: "yes",
    worksOnAnyMeeting: "yes",
    needsCalendarOrLink: "no"
  },
  {
    name: "ParakeetAI",
    pricing: "Pay-per-use credits from about $29.50 (e.g. 3 interview credits); subscriptions quoted after signup (parakeet-ai.com)",
    freeTrial: "no",
    joinsAsBot: "no",
    visibleToOthers: "no",
    runsLocally: "yes",
    worksOnAnyMeeting: "yes",
    needsCalendarOrLink: "no"
  },
  {
    name: "Cluely",
    pricing: "Starter $0; Pro about $19.99/mo; higher tiers about $149.99/mo (cluely.com/pricing)",
    freeTrial: "yes",
    joinsAsBot: "no",
    visibleToOthers: "no",
    runsLocally: "yes",
    worksOnAnyMeeting: "yes",
    needsCalendarOrLink: "no"
  },
  {
    name: "Granola",
    pricing: "Basic $0/user/mo; Business $14/user/mo; Enterprise from $35/user/mo (granola.ai/pricing)",
    freeTrial: "no",
    joinsAsBot: "no",
    visibleToOthers: "no",
    runsLocally: "yes",
    worksOnAnyMeeting: "yes",
    needsCalendarOrLink: "no"
  },
  {
    name: "Otter",
    pricing: "Basic $0; Pro about $16.99/mo user ($8.33/mo billed annually); Business about $30/mo user ($19.99/mo annual); Enterprise custom (otter.ai pricing)",
    freeTrial: "no",
    joinsAsBot: "yes",
    visibleToOthers: "yes",
    runsLocally: "no",
    worksOnAnyMeeting: "partial",
    needsCalendarOrLink: "yes"
  },
  {
    name: "Ophy AI",
    pricing: "Paid tiers about $9/mo (Basic) through $39/mo (Premium), credit-based; starter allotments vary (ophyai.com/us/pricing)",
    freeTrial: "no",
    joinsAsBot: "yes",
    visibleToOthers: "yes",
    runsLocally: "no",
    worksOnAnyMeeting: "partial",
    needsCalendarOrLink: "yes"
  }
];

const COLUMNS: { key: keyof Omit<Competitor, "name" | "pricing">; label: string }[] = [
  { key: "freeTrial", label: "Free trial" },
  { key: "joinsAsBot", label: "Joins as a bot" },
  { key: "visibleToOthers", label: "Visible to others" },
  { key: "runsLocally", label: "Runs locally" },
  { key: "worksOnAnyMeeting", label: "Works on any meeting" },
  { key: "needsCalendarOrLink", label: "Needs calendar / link" }
];

const Cell = ({ value }: { value: Support }) => {
  const styles: Record<Support, { label: string; className: string }> = {
    yes: { label: "Yes", className: "text-emerald-700 bg-emerald-50" },
    no: { label: "No", className: "text-gray-700 bg-gray-50" },
    partial: { label: "Partial", className: "text-amber-700 bg-amber-50" },
    unknown: { label: "—", className: "text-gray-400 bg-transparent" }
  };
  const { label, className } = styles[value];
  return (
    <span
      className={`inline-flex min-w-[3rem] items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
};

const MeetingBotsComparison = () => {
  return (
    <div className="w-full text-gray-800">
      <p className="mb-5 text-base leading-relaxed font-light">
        Most meeting assistants today work the same way. They join the call as a guest, take a
        camera slot and quietly record everyone in the room. After the call ends, they show you the transcripts and summaries. That's a design choice, not a
        requirement. It just happens to be the easiest one to ship.
      </p>
      <p className="mb-5 text-base leading-relaxed font-light">
        Hovrlay takes the opposite approach. It runs on your machine as a downloadable app, listens to mic audio and the audio your
        computer is already playing and shows you transcripts and answers in an overlay only you
        can see. No bot appears in the participant list. No link gets shared. No third party gets a
        copy of the meeting. Unlike Otter and Granola, it shows you the transcripts and answers in real time, not after the meeting ends.
      </p>
      <p className="mb-8 text-base leading-relaxed font-light">
        Here's how that compares to the tools people most often ask us about.
      </p>

      <div className="-mx-5 mb-8 overflow-x-auto px-5 md:mx-0 md:px-0">
        <table className="w-full min-w-[900px] border-separate border-spacing-0 text-left text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 border-b border-gray-200 bg-white px-4 py-3 font-semibold tracking-tight text-gray-900">
                Tool
              </th>
              <th className="min-w-[220px] border-b border-gray-200 px-4 py-3 font-semibold tracking-tight text-gray-900">
                Pricing (public plans)
              </th>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="border-b border-gray-200 px-4 py-3 font-semibold tracking-tight text-gray-900"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((row) => {
              const isHovrlay = row.name === "Hovrlay";
              return (
                <tr key={row.name} className={isHovrlay ? "bg-gray-50/60" : undefined}>
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 border-b border-gray-100 px-4 py-3 text-left font-medium ${
                      isHovrlay ? "bg-gray-50/60 text-gray-900" : "bg-white text-gray-800"
                    }`}
                  >
                    {row.name}
                  </th>
                  <td
                    className={`max-w-xs border-b border-gray-100 px-4 py-3 align-top text-xs leading-snug text-gray-700 ${
                      isHovrlay ? "bg-gray-50/60" : "bg-white"
                    }`}
                  >
                    {row.pricing}
                  </td>
                  {COLUMNS.map((col) => (
                    <td
                      key={col.key}
                      className={`border-b border-gray-100 px-4 py-3 align-middle ${
                        isHovrlay ? "bg-gray-50/60" : "bg-white"
                      }`}
                    >
                      <Cell value={row[col.key]} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingBotsComparison;
