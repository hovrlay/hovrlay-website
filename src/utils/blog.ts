import type { ComponentType } from "react";
import LaunchingHovrlay from "@/views/LaunchingHovrlay";
import MeetingBotsComparison from "@/views/MeetingBotsComparison";
import SupportedAppsUndetectability from "@/views/SupportedAppsUndetectability";
import SystemRequirements from "@/views/SystemRequirements";

export type BlogCategory = "Updates" | "Product" | "Support";

export interface Author {
  name: string;
  avatar: string;
}

export const AUTHORS = {
  anshul: {
    name: "Anshul Koshyari",
    avatar: "/anshul-avatar.jpg"
  }
} satisfies Record<string, Author>;

export type AuthorId = keyof typeof AUTHORS;

export interface BlogSection {
  id: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string; // ISO date (YYYY-MM-DD)
  readMinutes: number;
  author: AuthorId;
  description?: string;
  featured?: boolean;
  image?: string;
  sections?: BlogSection[];
}

export const CATEGORY_GRADIENTS: Record<BlogCategory, string> = {
  Product: "linear-gradient(90deg, #F97316 0%, #BE123C 100%)",
  Updates: "linear-gradient(90deg, #2EBA96 0%, #020D36 100%)",
  Support: "linear-gradient(90deg, #1337B6 0%, #0D1B4E 100%)"
};

export const POSTS: BlogPost[] = [
  {
    slug: "system-requirements",
    title: "What are the system requirements for Hovrlay?",
    category: "Support",
    date: "2025-12-14",
    readMinutes: 1,
    author: "anshul",
    sections: [
      { id: "compatibility", label: "Compatibility" },
      { id: "known-issues", label: "Known Issues for Incompatible Laptops" },
      { id: "windows-requirements", label: "Windows System Requirements" },
      { id: "mac-requirements", label: "Mac System Requirements" },
      { id: "general-compute", label: "General Compute Requirements" }
    ]
  },
  {
    slug: "supported-apps-undetectability",
    title: "What apps are supported for undetectability?",
    category: "Support",
    date: "2025-12-25",
    readMinutes: 2,
    author: "anshul",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "how-to-test", label: "How to Test Undetectability" },
      { id: "conferencing-software", label: "Undetectability for Conferencing Software" },
      { id: "zoom", label: "Zoom: Not Undetectable by Default" },
      { id: "codesignal", label: "CodeSignal" },
      { id: "amazon-chime", label: "Amazon Chime" },
      { id: "coderpad", label: "CoderPad" },
      { id: "codility", label: "Codility" },
      { id: "lark-feishu", label: "Lark/Feishu" },
      { id: "hackerrank", label: "HackerRank" },
      { id: "google-meet", label: "Google Meet" },
      { id: "microsoft-teams", label: "Microsoft Teams" },
      { id: "cisco-webex", label: "Cisco WebEx" },
      { id: "slack-huddle", label: "Slack Huddle" },
      { id: "ring-central", label: "Ring Central" },
      { id: "apollo-dialer", label: "Apollo Dialer" },
      { id: "facetime", label: "FaceTime" },
      { id: "not-undetectable-for", label: "Hovrlay is NOT Undetectable For..." }
    ]
  },
  {
    slug: "meeting-bots-comparison",
    title: "The State of AI Meeting Assistants in 2026",
    category: "Updates",
    date: "2026-01-26",
    readMinutes: 2,
    author: "anshul",
    featured: true,
    image: "/robots-at-table.jpg",
    description:
      "The difference between a tool that helps and a tool that spies is often just how it shows up. A bot with a name and camera slot feels like a stranger entering the room.",
    sections: [
      { id: "overview", label: "Traditional Meeting Bots" },
      { id: "invisible-overlays", label: "Invisible Overlays" },
      { id: "comparison", label: "Tool comparison" },
      { id: "which-to-pick", label: "Why both still exist" }
    ]
  },
  {
    slug: "launching-hovrlay",
    title: "Launching Hovrlay",
    category: "Product",
    date: "2026-04-05",
    readMinutes: 5,
    author: "anshul",
    image: "/man-vs-robot.jpg",
    description:
      '"Build what you want to see in the world." — The whole story from the day Roy got viral for Interview Coder to the day I launched Hovrlay on Product Hunt.',
    sections: [
      { id: "the-setup", label: "The Setup" },
      { id: "the-spark", label: "The Spark" },
      { id: "same-idea-different-zip-code", label: "Same Idea, Different Zip Code" },
      { id: "the-grind-then-the-quiet", label: "The Grind, Then the Quiet" },
      { id: "unfinished-business", label: "Unfinished Business" },
      { id: "the-launch", label: "The Launch" }
    ]
  }
];

export const CATEGORIES: ("All" | BlogCategory)[] = ["All", "Updates", "Product", "Support"];

const MONTH_NAMES = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const SHORT_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const titleCase = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

export const formatLongDate = (iso: string) => {
  const d = new Date(iso);
  return `${titleCase(MONTH_NAMES[d.getMonth()])} ${d.getDate()}, ${d.getFullYear()}`;
};

export const formatShortDate = (iso: string) => {
  const d = new Date(iso);
  return `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}`;
};

export const groupByMonth = (posts: BlogPost[]) => {
  const groups = new Map<string, { label: string; posts: BlogPost[] }>();
  for (const post of posts) {
    const d = new Date(post.date);
    const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2, "0")}`;
    if (!groups.has(key)) {
      groups.set(key, { label: MONTH_NAMES[d.getMonth()], posts: [] });
    }
    groups.get(key)!.posts.push(post);
  }
  return Array.from(groups.entries())
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .map(([, value]) => ({
      ...value,
      posts: value.posts.sort((a, b) => b.date.localeCompare(a.date))
    }));
};

export const getPostBySlug = (slug: string | undefined) =>
  slug ? POSTS.find((p) => p.slug === slug) : undefined;

const BLOG_BODIES: Record<string, ComponentType> = {
  "system-requirements": SystemRequirements,
  "supported-apps-undetectability": SupportedAppsUndetectability,
  "meeting-bots-comparison": MeetingBotsComparison,
  "launching-hovrlay": LaunchingHovrlay
};

export const getBlogBody = (slug: string | undefined) =>
  slug ? BLOG_BODIES[slug] : undefined;
