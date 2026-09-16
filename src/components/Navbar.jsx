import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import Brand from "./Brand";

const links = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Placement", section: "placement" },
  { label: "About", section: "about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4 sm:h-[72px] sm:gap-4">
        <Brand onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((item) =>
            item.path ? (
              <Link
                key={item.label}
                to={item.path}
                className={`focus-ring text-sm font-semibold transition ${
                  location.pathname === item.path ? "text-[#0b63ad]" : "text-slate-600 hover:text-[#0b63ad]"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => goToSection(item.section)}
                className="focus-ring text-sm font-semibold text-slate-600 transition hover:text-[#0b63ad]"
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="focus-ring hidden items-center gap-2 rounded-lg bg-[#0b63ad] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#084f8c] sm:inline-flex"
        >
          Enquire Now <FiArrowRight />
        </Link>

        <button
          className="focus-ring inline-flex rounded-lg border border-slate-200 p-2.5 text-xl text-[#092f4f] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-200 bg-white shadow-soft lg:hidden sm:max-h-[calc(100vh-76px)]">
          <nav className="container-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {links.map((item) =>
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => goToSection(item.section)}
                  className="focus-ring rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </button>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b63ad] px-4 py-3 text-sm font-bold text-white"
            >
              Enquire Now <FiArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
