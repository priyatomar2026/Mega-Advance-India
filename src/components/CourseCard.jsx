// import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

// export default function CourseCard({ course }) {
//   return (
//     <article className="group flex h-full min-w-0 flex-col rounded-2xl bg-white p-5 card-border transition duration-200 hover:-translate-y-1 hover:border-[#b9ddff] hover:shadow-soft sm:p-6">
//       <div className="flex items-start justify-between gap-4">
//         <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
//           <FiBookOpen />
//         </div>
//         <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
//           {course.category}
//         </span>
//       </div>

//       <h3 className="mt-5 font-display text-lg font-semibold text-[#092f4f] sm:text-xl">{course.name}</h3>
//       <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{course.description}</p>

//       <a href="/contact" className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b63ad]">
//         Enquire <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//       </a>
//     </article>
//   );
// }

import {
  FiArrowUpRight,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

const courseIcons = {
  FCA: FiBookOpen,
  CO: FiMonitor,
  DCP: FiLayers,
  DCIT: FiCpu,
  TELLY: FiBarChart2,
  DC: FiBookOpen,
  ADIT: FiGlobe,
  DCN: FiDatabase,
  "Data Entry Operator": FiBriefcase,
  Java: FiCode,
  C: FiCode,
  "C++": FiCode,
  "D.net": FiCode,
  "Data Analytics with Python": FiBarChart2,
  "AI in Digital Marketing": FiGlobe,
  "Robotics and AI": FiCpu,
  "AI Data Management": FiDatabase,
};

const courseThemes = {
  FCA: {
    label: "Foundation",
    accent: "#0b63ad",
    soft: "#eef7ff",
  },

  CO: {
    label: "Computer",
    accent: "#2563eb",
    soft: "#eff6ff",
  },

  DCP: {
    label: "Diploma",
    accent: "#7c3aed",
    soft: "#f5f3ff",
  },

  DCIT: {
    label: "Technology",
    accent: "#0891b2",
    soft: "#ecfeff",
  },

  TELLY: {
    label: "Accounting",
    accent: "#059669",
    soft: "#ecfdf5",
  },

  DC: {
    label: "Computer",
    accent: "#0b63ad",
    soft: "#eff8ff",
  },

  ADIT: {
    label: "Advanced",
    accent: "#8bc349",
    soft: "#f4faeb",
  },

  DCN: {
    label: "Networking",
    accent: "#ea580c",
    soft: "#fff7ed",
  },

  "Data Entry Operator": {
    label: "Career Skill",
    accent: "#0891b2",
    soft: "#ecfeff",
  },

  Java: {
    label: "Programming",
    accent: "#dc2626",
    soft: "#fef2f2",
  },

  C: {
    label: "Programming",
    accent: "#2563eb",
    soft: "#eff6ff",
  },

  "C++": {
    label: "Programming",
    accent: "#7c3aed",
    soft: "#f5f3ff",
  },

  "D.net": {
    label: "Development",
    accent: "#4f46e5",
    soft: "#eef2ff",
  },

  "Data Analytics with Python": {
    label: "Data & AI",
    accent: "#059669",
    soft: "#ecfdf5",
  },

  "AI in Digital Marketing": {
    label: "AI & Marketing",
    accent: "#db2777",
    soft: "#fdf2f8",
  },

  "Robotics and AI": {
    label: "AI & Robotics",
    accent: "#0891b2",
    soft: "#ecfeff",
  },

  "AI Data Management": {
    label: "Data & AI",
    accent: "#9333ea",
    soft: "#faf5ff",
  },
};

export default function CourseCard({ course, index = 0 }) {
  const Icon = courseIcons[course.name] || FiBookOpen;

  const theme = courseThemes[course.name] || {
    label: course.category || "Professional Course",
    accent: "#0b63ad",
    soft: "#eff8ff",
  };

  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-[#dceaf3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#b8d8ee] hover:shadow-[0_16px_40px_rgba(9,47,79,0.10)]">
      {/* =========================
          VISUAL HEADER
      ========================== */}
      <div
        className="relative h-[150px] overflow-hidden"
        style={{
          backgroundColor: theme.soft,
        }}
      >
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(${theme.accent} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.accent} 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Large course number */}
        <span
          className="pointer-events-none absolute -right-2 -top-5 select-none text-[100px] font-black leading-none opacity-[0.06]"
          style={{
            color: theme.accent,
          }}
        >
          {number}
        </span>

        {/* Decorative circle */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-10 h-36 w-36 rounded-full opacity-10"
          style={{
            backgroundColor: theme.accent,
          }}
        />

        {/* Secondary decorative circle */}
        <div
          className="pointer-events-none absolute -left-10 bottom-[-70px] h-28 w-28 rounded-full border-[14px] opacity-[0.07]"
          style={{
            borderColor: theme.accent,
          }}
        />

        {/* Course icon */}
        <div
          className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center"
          style={{
            backgroundColor: theme.accent,
            color: "#ffffff",
          }}
        >
          <Icon className="text-2xl" />
        </div>

        {/* Category */}
        <span
          className="absolute right-5 top-6 border bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{
            borderColor: `${theme.accent}30`,
            color: theme.accent,
          }}
        >
          {theme.label}
        </span>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-1 w-16"
          style={{
            backgroundColor: theme.accent,
          }}
        />
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Small label */}
        <div className="mb-2 flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: theme.accent,
            }}
          />

          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[11px]">
            Professional Training
          </span>
        </div>

        {/* Course title */}
        <h3 className="font-display text-lg font-bold leading-snug text-[#092f4f] sm:text-xl">
          {course.name}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {course.description}
        </p>

        {/* Bottom section */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <span className="text-[11px] font-semibold leading-4 text-slate-400">
            Career-focused
            <br />
            learning
          </span>

          <a
            href="/contact"
            className="focus-ring group/link inline-flex shrink-0 items-center gap-2 text-sm font-bold"
            style={{
              color: theme.accent,
            }}
          >
            Enquire
            <span
              className="flex h-7 w-7 items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1"
              style={{
                backgroundColor: theme.soft,
              }}
            >
              <FiArrowUpRight className="text-sm" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}