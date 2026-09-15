const sections = [
  ("Website Usage",
  "Use this website for lawful purposes and do not attempt to disrupt, misuse or gain unauthorized access to the website or its systems."),
  ("Course Information",
  "Course names and general descriptions are provided for information. Curriculum, duration, schedule and availability may change and should be confirmed with the institute."),
  ("Enquiries and Registrations",
  "Submitting an enquiry does not by itself constitute admission, registration or a contractual commitment. Any formal registration should follow the institute's stated process."),
  ("Fees and Payments",
  "Fees, refunds and payment conditions should be confirmed directly with the institute before making a payment. Official payment terms should be added to the production website."),
  ("Placement Assistance",
  "Placement assistance means career-oriented support such as guidance, preparation and assistance with opportunities. It does not constitute a guarantee of employment, salary or selection."),
  ("Intellectual Property",
  "Website content, branding, graphics and original materials may be protected by applicable intellectual property laws. Do not copy or reuse protected material without permission."),
  ("External Links",
  "Links to external websites are provided for convenience. Mega Advance India is not responsible for the content, availability or policies of third-party websites."),
  ("Limitation of Liability",
  "The final legal wording should be reviewed by the institute and appropriate legal counsel. This template is not legal advice."),
  ("Changes to Terms",
  "These terms may be updated as the website, services or applicable requirements change."),
  ("Contact Information",
  "Official institute contact information should be inserted before publication."),
];

export default function TermsConditions() {
  return (
    <section className="section-pad">
      <div className="container-shell max-w-4xl">
        <div className="eyebrow">Legal</div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#092f4f] sm:text-5xl">
          Terms & Conditions
        </h1>
        <p className="section-copy mt-5 max-w-2xl">
          General website terms for the Mega Advance India website. Review and
          customize these terms before production use.
        </p>
        <div className="mt-12 space-y-9">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="font-display text-xl font-semibold text-[#092f4f]">
                {heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
