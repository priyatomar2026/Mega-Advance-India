import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[65vh] place-items-center px-4 py-20 text-center">
      <div>
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-[#092f4f]">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you requested does not exist.</p>
        <Link to="/" className="mt-7 inline-flex rounded-lg bg-[#0b63ad] px-5 py-3 text-sm font-bold text-white">Back to home</Link>
      </div>
    </section>
  );
}