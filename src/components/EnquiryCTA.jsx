// import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";

// export default function EnquiryCTA({ compact = false }) {
//   return (
//     <section className={`section-pad ${compact ? "home-compact-cta" : ""}`}>
//       <div className="container-shell">
//         <div className="relative overflow-hidden rounded-3xl bg-[#0b63ad] px-6 py-8 text-white sm:px-10 sm:py-9 md:flex md:items-center md:justify-between md:gap-10">
//           <div className="relative z-10 max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-100">Start your next step</p>
//             <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-[2.1rem]">Ready to start learning?</h2>
//             <p className="mt-4 max-w-xl leading-7 text-blue-50">
//               Talk to the Growth Bharat team about courses, training and placement assistance.
//             </p>
//           </div>
//           <div className="relative z-10 mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
//             <Link to="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-[#0b63ad] hover:bg-blue-50">
//               Contact Us <FiArrowRight />
//             </Link>
//             <Link to="/courses" className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10">
//               Explore Courses
//             </Link>
//           </div>
//           <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
//           <div className="absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/10" />
//         </div>
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function EnquiryCTA({ compact = false }) {
  return (
    <section className={`section-pad ${compact ? "home-compact-cta" : ""}`}>
      <div className="container-shell">
        <div className="relative overflow-hidden bg-[#092f4f] px-5 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-11">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[40px] border-[#0b63ad]/30" />
          <div className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full border-[35px] border-[#8bc349]/20" />

          <div className="pointer-events-none absolute right-[22%] top-0 hidden h-full w-px bg-white/5 lg:block" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#8bc349]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8bc349]">
                  Start Your Next Step
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-[38px]">
                Ready to build your{" "}
                <span className="text-[#8bc349]">next skill?</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-[15px] sm:leading-7">
                Explore practical courses, professional training and career
                support designed to help you move forward with confidence.
              </p>

              {/* Benefits */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Practical Training",
                  "Career Guidance",
                  "Industry-Focused Skills",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-white/90"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8bc349] text-white">
                      <FiCheck className="text-[11px]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="focus-ring group inline-flex items-center justify-center gap-3 bg-[#8bc349] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#78ad3c]"
              >
                Contact Us
                <span className="flex h-6 w-6 items-center justify-center bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight className="text-sm" />
                </span>
              </Link>

              <Link
                to="/courses"
                className="focus-ring inline-flex items-center justify-center border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-24 bg-[#8bc349]" />
          <div className="absolute bottom-0 left-24 h-1 w-12 bg-[#0b63ad]" />
        </div>
      </div>
    </section>
  );
}