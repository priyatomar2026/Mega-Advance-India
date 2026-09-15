import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

export default function CourseCard({ course }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-6 card-border transition duration-200 hover:-translate-y-1 hover:border-[#b9ddff] hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
          <FiBookOpen />
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">
          {course.category}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-[#092f4f]">{course.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{course.description}</p>

      <a href="/contact" className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0b63ad]">
        Enquire <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  );
}