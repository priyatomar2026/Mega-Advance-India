import { Link } from "react-router-dom";

export default function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="focus-ring flex shrink-0 items-center gap-2.5"
      aria-label="Growth Bharat home"
    >
      <img src="/logo-mark.png" alt="" className="h-10 w-10 object-contain" />
      <span className="leading-tight">
        <span className="block font-display text-[17px] font-bold tracking-tight text-[#092f4f]">
          Growth
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1677c8]">
          Bharat
        </span>
      </span>
    </Link>
  );
}
