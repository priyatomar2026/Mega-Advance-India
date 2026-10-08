export default function SectionHeading({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={centered ? "justify-center eyebrow" : "eyebrow"}>{eyebrow}</div>
      <h2 className="section-title mt-3">{title}</h2>
      {copy && <p className="section-copy mt-5 text-base">{copy}</p>}
    </div>
  );
}
