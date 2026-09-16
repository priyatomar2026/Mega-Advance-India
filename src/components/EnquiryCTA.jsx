import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function EnquiryCTA() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-3xl bg-[#0b63ad] px-7 py-12 text-white sm:px-12 md:flex md:items-center md:justify-between md:gap-10">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-100">Start your next step</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Ready to start learning?</h2>
            <p className="mt-4 max-w-xl leading-7 text-blue-50">
              Talk to the Growth Bharat team about courses, training and placement assistance.
            </p>
          </div>
          <div className="relative z-10 mt-8 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <Link to="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-[#0b63ad] hover:bg-blue-50">
              Contact Us <FiArrowRight />
            </Link>
            <Link to="/courses" className="focus-ring inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10">
              Explore Courses
            </Link>
          </div>
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/10" />
        </div>
      </div>
    </section>
  );
}
