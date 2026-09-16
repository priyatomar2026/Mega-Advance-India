
const sections = [('Introduction', 'This Privacy Policy explains how information submitted through the Growth Bharat website may be handled. It is written as a general website template and should be reviewed and customized by the institute before publication.'), ('Information We Collect', 'If you submit an enquiry, the website may collect information such as your name, phone number, email address, course interest and message.'), ('How We Use Information', 'Enquiry information may be used to respond to questions, provide course information, coordinate follow-up and support communication related to training or placement assistance.'), ('Contact / Enquiry Information', 'Please avoid submitting passwords, financial information or other sensitive information through a general enquiry form.'), ('Cookies', 'The website may use essential browser storage or cookies depending on the final production configuration. Any analytics or non-essential cookies should be disclosed and configured appropriately.'), ('Data Security', 'Reasonable technical and organizational measures should be used to protect enquiry information. No website can guarantee absolute security.'), ('Third-Party Services', 'The production website may use third-party services for hosting, analytics, forms, maps or social links. Their respective privacy policies may also apply.'), ('Policy Updates', 'This policy may be updated when website functionality, services or legal requirements change.'), ('Contact Information', 'Official contact details should be inserted before publication.')];

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" intro="A clear, readable privacy policy template for the Growth Bharat website." sections={sections} />;
}

function LegalPage({ title, intro, sections }) {
  return (
    <section className="section-pad">
      <div className="container-shell max-w-4xl">
        <div className="eyebrow">Legal</div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#092f4f] sm:text-5xl">{title}</h1>
        <p className="section-copy mt-5 max-w-2xl">{intro}</p>
        <div className="mt-8 space-y-6">
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="font-display text-xl font-semibold text-[#092f4f]">{heading}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
