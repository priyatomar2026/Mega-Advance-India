import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="bg-[#092f4f] text-slate-200">
      <div className="container-shell grid gap-8 py-12 md:grid-cols-[1.35fr_1fr_1fr_1.1fr]">
        <div>
          <Brand light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Practical computer, IT, data and AI learning with a career-focused approach and placement assistance.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Company</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            <Link className="hover:text-white" to="/#about">About</Link>
            <Link className="hover:text-white" to="/courses">Courses</Link>
            <Link className="hover:text-white" to="/#placement">Placement</Link>
            <Link className="hover:text-white" to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Support</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            <Link className="hover:text-white" to="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-white" to="/terms-and-conditions">Terms & Conditions</Link>
          </div>
          <h3 className="mt-6 font-display text-sm font-semibold text-white">Courses</h3>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <span>Computer</span><span>Programming</span><span>Data & AI</span><span>Digital Marketing</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex gap-3"><FiPhone className="mt-0.5 shrink-0" /> <span>+91 XXXXX XXXXX</span></div>
            <div className="flex gap-3"><FiMail className="mt-0.5 shrink-0" /> <span>info@example.com</span></div>
            <div className="flex gap-3"><FiMapPin className="mt-0.5 shrink-0" /> <span>[Institute Address]</span></div>
          </div>
          <div className="mt-6 flex gap-2">
            <a aria-label="Facebook" href="#" className="focus-ring rounded-lg border border-white/15 p-2.5 hover:bg-white/10"><FiFacebook /></a>
            <a aria-label="Instagram" href="#" className="focus-ring rounded-lg border border-white/15 p-2.5 hover:bg-white/10"><FiInstagram /></a>
            <a aria-label="LinkedIn" href="#" className="focus-ring rounded-lg border border-white/15 p-2.5 hover:bg-white/10"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Mega Advance India</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://webseeder.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-200 underline-offset-4 hover:underline"
            >
              WebSeeder Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
