import { useState } from "react";
import { FiCheckCircle, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { courses } from "../data/courses";

const initial = { name: "", phone: "", email: "", course: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (event) => {
    setSubmitted(false);
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initial);
  };

  return (
    <div>
      <section className="border-b border-slate-200 bg-[#f5faff]">
        <div className="container-shell py-8 sm:py-12">
          <div className="eyebrow">Get in touch</div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#092f4f] sm:text-5xl">
            Contact Growth Bharat
          </h1>
          <p className="section-copy mt-5 max-w-2xl">
            Have a course question or want to discuss training and placement
            assistance? Send an enquiry and the team can follow up with you.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#092f4f]">
              Talk to the team
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Official contact details can be added here once provided by the
              institute.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <FiPhone className="mt-1 text-xl text-[#0b63ad]" />
                <div>
                  <p className="font-semibold text-[#092f4f]">Phone</p>
                  <p className="mt-1 text-sm text-slate-500">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <FiMail className="mt-1 text-xl text-[#0b63ad]" />
                <div>
                  <p className="font-semibold text-[#092f4f]">Email</p>
                  <p className="mt-1 text-sm text-slate-500">
                    info@example.com
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <FiMapPin className="mt-1 text-xl text-[#0b63ad]" />
                <div>
                  <p className="font-semibold text-[#092f4f]">Address</p>
                  <p className="mt-1 text-sm text-slate-500">
                    [Institute Address]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
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
                label="Email"
                type="email"
                value={form.email}
                onChange={update("email")}
                required
              />
              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block text-sm font-semibold text-[#092f4f]"
                >
                  Course Interested In
                </label>
                <select
                  id="course"
                  value={form.course}
                  onChange={update("course")}
                  className="focus-ring w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#9bcfff]"
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
                  className="mb-2 block text-sm font-semibold text-[#092f4f]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us what you would like to know..."
                  required
                  className="focus-ring w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#9bcfff]"
                />
              </div>
            </div>

            {submitted && (
              <div
                role="status"
                className="mt-5 flex gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-800"
              >
                <FiCheckCircle className="mt-0.5 shrink-0" />
                <span>
                  Your enquiry has been recorded on this demo form. Connect the
                  form to a backend/email service for production submissions.
                </span>
              </div>
            )}

            <button
              type="submit"
              className="focus-ring mt-6 w-full rounded-xl bg-[#0b63ad] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#084f8c]"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, required }) {
  const id = label.toLowerCase().replaceAll(" ", "-");
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-[#092f4f]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="focus-ring w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#9bcfff]"
      />
    </div>
  );
}
