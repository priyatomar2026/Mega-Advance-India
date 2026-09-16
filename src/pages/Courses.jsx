import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import CourseCard from "../components/CourseCard";
import SectionHeading from "../components/SectionHeading";
import { courseCategories, courses } from "../data/courses";

export default function Courses() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return courses.filter((course) => {
      const categoryMatch = category === "All" || course.category === category;
      const queryMatch = !term || `${course.name} ${course.category} ${course.description}`.toLowerCase().includes(term);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  return (
    <div>
      <section className="border-b border-slate-200 bg-[#f5faff]">
        <div className="container-shell py-8 sm:py-16">
          <div className="eyebrow">Course Catalogue</div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#092f4f] sm:text-5xl">
            Courses & Training Programs
          </h1>
          <p className="section-copy mt-3 max-w-2xl">
            Explore computer, diploma, programming, networking, data, AI and digital marketing programs.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <label htmlFor="course-search" className="sr-only">Search courses</label>
                <input
                  id="course-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search courses..."
                  className="focus-ring w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none focus:border-[#9bcfff]"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {courseCategories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`focus-ring whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition ${
                      category === item
                        ? "bg-[#0b63ad] text-white"
                        : "bg-slate-50 text-slate-600 hover:bg-[#eff8ff] hover:text-[#0b63ad]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Programs"
              title="Find your next learning path"
              copy="Choose a program based on the skills you want to develop."
            />
            <span className="hidden shrink-0 rounded-full bg-[#eff8ff] px-4 py-2 text-xs font-bold text-[#0b63ad] sm:inline-flex">
              {filtered.length} courses
            </span>
          </div>

          {filtered.length ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => <CourseCard key={course.name} course={course} />)}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
              <p className="font-semibold text-[#092f4f]">No courses found</p>
              <p className="mt-2 text-sm text-slate-500">Try another search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
