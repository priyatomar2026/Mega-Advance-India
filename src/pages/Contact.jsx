
import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { courses } from "../data/courses";

const initial = {
  name: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (event) => {
    setSubmitted(false);

    setForm((current) => ({
      ...current,
      [key]: event.target.value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <main className="bg-white">
      {/* =========================================
          HERO
      ========================================== */}
      <section
        id="contact"
        className="relative overflow-hidden border-b border-slate-200 bg-[#f5faff] scroll-mt-[76px]"
      >
        <div className="container-shell relative py-8 sm:py-10 lg:py-12">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="eyebrow">Get in touch</div>

              <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-[#092f4f]">
                Let's start your
                <span className="block text-[#0b63ad]">
                  learning journey.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Have questions about our courses, training programs, or
                placement assistance? Send us your enquiry and our team will
                help you find the right learning path.
              </p>
            </div>

            {/* Small hero information block */}
            <div className="hidden border-l border-slate-300 pl-6 lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
                Student Support
              </p>

              <p className="mt-1.5 text-sm font-semibold text-[#092f4f]">
                We're here to help
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Course guidance & enquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT AREA
      ========================================== */}
      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            {/* =====================================
                LEFT SIDE
            ====================================== */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#0b63ad]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3aa8e8]" />
                Contact information
              </span>

              <h2 className="mt-2.5 font-display text-2xl font-bold leading-tight text-[#092f4f] sm:text-[1.75rem]">
                Have a question?
                <br />
                <span className="text-[#0b63ad]">Talk to us.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Whether you need help choosing a course or want to know more
                about our training programs, our team is ready to assist.
              </p>

              {/* Contact details */}
              <div className="mt-6 space-y-2.5">
                <ContactItem
                  icon={<FiPhone />}
                  title="Phone"
                  value="+91 XXXXX XXXXX"
                />

                <ContactItem
                  icon={<FiMail />}
                  title="Email"
                  value="info@example.com"
                />

                <ContactItem
                  icon={<FiMapPin />}
                  title="Visit Us"
                  value="[Institute Address]"
                />
              </div>

              {/* Response note */}
              <div className="mt-5 flex items-start gap-3 border-l-2 border-[#3aa8e8] bg-[#f7fbfe] px-3.5 py-3">
                <FiCheckCircle className="mt-0.5 shrink-0 text-[#0b63ad]" />

                <div>
                  <p className="text-sm font-semibold text-[#092f4f]">
                    Need course guidance?
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">
                    Tell us what you want to learn and we'll help you explore
                    suitable options.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================
                FORM
            ====================================== */}
            <div className="relative">
              {/* Accent line */}
              <div className="absolute -top-1 left-6 right-6 h-1 rounded-full bg-[#3aa8e8]" />

              <form
                onSubmit={submit}
                className="border border-slate-200 bg-white p-5 pt-7 shadow-[0_12px_40px_rgba(9,47,79,0.08)] sm:p-7 sm:pt-8"
              >
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0b63ad]">
                    Send an enquiry
                  </p>

                  <h3 className="mt-1.5 font-display text-xl font-bold text-[#092f4f]">
                    Tell us how we can help
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />

                  <Field
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                  />

                  <Field
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />

                  <div>
                    <label
                      htmlFor="course"
                      className="mb-1.5 block text-xs font-bold text-[#092f4f]"
                    >
                      Course Interested In
                    </label>

                    <select
                      id="course"
                      value={form.course}
                      onChange={update("course")}
                      className="focus-ring h-[43px] w-full rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-700 outline-none transition-colors focus:border-[#3aa8e8] focus:ring-1 focus:ring-[#3aa8e8]/20"
                    >
                      <option value="">Select a course</option>

                      {courses.map((course) => (
                        <option key={course.name} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold text-[#092f4f]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="4"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us what you would like to know..."
                      required
                      className="focus-ring w-full resize-y rounded-lg border border-slate-200 px-3.5 py-3 text-sm leading-6 text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#3aa8e8] focus:ring-1 focus:ring-[#3aa8e8]/20"
                    />
                  </div>
                </div>

                {submitted && (
                  <div
                    role="status"
                    className="mt-4 flex gap-2.5 border border-emerald-100 bg-emerald-50 p-3 text-sm leading-5 text-emerald-800"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0" />

                    <span>
                      Your enquiry has been recorded on this demo form.
                    </span>
                  </div>
                )}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-400">
                    We'll use your details only to respond to your enquiry.
                  </p>

                  <button
                    type="submit"
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b63ad] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#084f8c] hover:shadow-md active:translate-y-px"
                  >
                    <FiSend />
                    Send Enquiry
                    <FiArrowUpRight className="text-base" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM CTA STRIP
      ========================================== */}
      <section className="border-t border-slate-200 bg-[#092f4f]">
        <div className="container-shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#7cc7f0]">
              Ready to get started?
            </p>

            <h2 className="mt-1 font-display text-lg font-bold text-white sm:text-xl">
              Find the right course for your goals.
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#7cc7f0]"
          >
            Send an enquiry
            <FiArrowUpRight />
          </a>
        </div>
      </section>
    </main>
  );
}

/* =========================================
   CONTACT ITEM
========================================= */

function ContactItem({ icon, title, value }) {
  return (
    <div className="group flex items-center gap-3.5 border border-slate-200 bg-white px-3.5 py-3 transition-all duration-200 hover:border-[#b9ddf5] hover:bg-[#fafdff]">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef7fd] text-lg text-[#0b63ad] transition-colors group-hover:bg-[#0b63ad] group-hover:text-white">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
          {title}
        </p>

        <p className="mt-0.5 break-words text-sm font-medium text-[#092f4f]">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   FORM FIELD
========================================= */

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}) {
  const id = label.toLowerCase().replaceAll(" ", "-");

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-bold text-[#092f4f]"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="focus-ring h-[43px] w-full rounded-lg border border-slate-200 px-3.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#3aa8e8] focus:ring-1 focus:ring-[#3aa8e8]/20"
      />
    </div>
  );
}
;
