import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiMessageCircle,
  FiMonitor,
  FiPenTool,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import CourseCard from "../components/CourseCard";
import EnquiryCTA from "../components/EnquiryCTA";
import { courses } from "../data/courses";

const heroImage =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85";

const learningImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85";

const popular = [
  "FCA",
  "ADIT",
  "DCN",
  "Data Analytics with Python",
  "AI in Digital Marketing",
  "Robotics and AI",
]
  .map((name) => courses.find((course) => course.name === name))
  .filter(Boolean);

const benefits = [
  {
    icon: FiMonitor,
    title: "Practical Learning",
    text: "Focus on skills that can be applied beyond the classroom.",
  },
  {
    icon: FiBriefcase,
    title: "Career-Oriented",
    text: "Course options designed around useful workplace skills.",
  },
  {
    icon: FiUsers,
    title: "Guided Learning",
    text: "A supportive learning environment for beginners and learners.",
  },
  {
    icon: FiMessageCircle,
    title: "Placement Assistance",
    text: "Career guidance and placement-oriented support.",
  },
];

const placementPoints = [
  {
    icon: FiFileText,
    title: "Resume guidance",
    text: "Improve how you present your skills, projects and training.",
  },
  {
    icon: FiMessageCircle,
    title: "Interview preparation",
    text: "Practice communication and interview-focused preparation.",
  },
  {
    icon: FiUsers,
    title: "Career guidance",
    text: "Understand possible learning and career paths after training.",
  },
  {
    icon: FiBriefcase,
    title: "Placement assistance",
    text: "Receive job-oriented support relevant to your training.",
  },
];

const testimonials = [
  {
    quote:
      "The practical approach helped me feel more confident using technology in my day-to-day work and studies.",
    name: "Aarav Sharma",
    detail: "Computer applications learner",
    initials: "AS",
  },
  {
    quote:
      "I liked that the learning path felt clear and approachable. The guidance made it easier to understand what to work on next.",
    name: "Priya Verma",
    detail: "Programming learner",
    initials: "PV",
  },
  {
    quote:
      "The course structure gave me a useful foundation and encouraged me to keep building projects after class.",
    name: "Rohan Mehta",
    detail: "Data and AI learner",
    initials: "RM",
  },
];

const faqs = [
  [
    "Who can join the courses?",
    "The courses are intended for beginners, students and working learners. The right starting point depends on your current skills and goals.",
  ],
  [
    "Are the courses practical?",
    "Yes. The learning approach focuses on useful computer, IT, data, AI and digital marketing skills that can be applied through practice and projects.",
  ],
  [
    "Is placement guaranteed?",
    "No. Growth Bharat provides placement-oriented guidance and assistance, while opportunities depend on skills, eligibility and available openings.",
  ],
  [
    "How do I choose the right course?",
    "Share your interests, education and career goals with the team. They can help you compare suitable learning paths before you enrol.",
  ],
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeTestimonial];

  return (
    <div className="home-page">
      <section className="home-hero relative overflow-hidden bg-[#f3f9ff]">
        <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-[#cceaff]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
        <div className="home-hero-inner container-shell relative grid min-h-0 items-center gap-8 py-8 pb-12 sm:gap-12 sm:py-12 sm:pb-16 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-12 xl:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b9ddff] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0b63ad]">
              <span className="h-2 w-2 rounded-full bg-[#3aa8e8]" /> Learn.
              Practise. Grow.
            </div>
            <h1 className="home-hero-title mt-4 max-w-2xl font-display text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#092f4f] sm:mt-5">
              Turn curiosity into{" "}
              <span className="text-[#1677c8]">career-ready skills.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Build a stronger digital future with practical computer, IT, data
              and AI training, guided learning and placement-oriented career
              support.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
              <Link
                to="/courses"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b63ad] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#084f8c] sm:px-6 sm:py-3.5"
              >
                Explore Courses <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-lg border border-[#b9ddff] bg-white px-5 py-3 text-sm font-bold text-[#0b63ad] hover:bg-[#eff8ff] sm:px-6 sm:py-3.5"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:mt-8 sm:gap-x-7 sm:gap-y-3 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <FiCheck className="text-[#1677c8]" /> Practical skill
                development
              </span>
              <span className="inline-flex items-center gap-2">
                <FiCheck className="text-[#1677c8]" /> Career support
              </span>
            </div>
            <div className="mt-6 hidden max-w-xl grid-cols-3 gap-5 border-t border-[#cfe7fa] pt-5 sm:mt-8 sm:grid">
              <div>
                <p className="font-display text-2xl font-bold text-[#092f4f]">
                  6+
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Popular learning paths
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-[#092f4f]">
                  4
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Core learning areas
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-[#092f4f]">
                  1:1
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Guidance when needed
                </p>
              </div>
            </div>
          </div>

          <div className="home-hero-media relative mx-auto mt-2 w-full min-w-0 max-w-lg lg:mt-0 lg:justify-self-end">
            <div className="absolute -left-5 top-8 z-10 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eff8ff] text-[#0b63ad]">
                  <FiStar />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#092f4f]">
                    Learn with purpose
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Skills for your next step
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border-8 border-white bg-white hero-image">
              <img
                src={heroImage}
                alt="Students learning together in a training environment"
              className="h-[230px] w-full object-cover sm:h-[390px] lg:h-[440px] xl:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-4 right-3 max-w-[220px] rounded-2xl bg-[#092f4f] p-3 text-white shadow-soft sm:-bottom-5 sm:right-7 sm:max-w-[250px] sm:p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#8ed4ff]">
                  <FiCode />
                </span>
                <div>
                  <p className="text-sm font-bold">Skills-first training</p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Computer, IT, data & AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="container-shell grid grid-cols-2 divide-x divide-slate-200 py-4 sm:grid-cols-4 sm:py-5">
          {[
            "Computer skills",
            "Programming",
            "Data & AI",
            "Digital marketing",
          ].map((label, index) => (
            <Link
              key={label}
              to="/courses"
              className={`group px-3 text-center text-xs font-bold text-slate-600 transition hover:text-[#0b63ad] sm:text-sm ${index > 1 ? "mt-3 sm:mt-0" : ""}`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3aa8e8] sm:text-[11px]">
                0{index + 1}
              </span>
              <span className="mt-1 block">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad bg-white">
        <div className="container-shell grid items-center gap-9 sm:gap-14 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)]">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={learningImage}
              alt="Learner working on a laptop during training"
              className="h-64 w-full object-cover sm:h-[440px]"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Growth Bharat"
              title="Skills that open doors"
              copy="Growth Bharat focuses on practical computer and technology education, helping learners build useful skills for study, work and career development."
            />
            <div className="mt-6 grid min-w-0 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="home-card rounded-2xl bg-[#f8fbfe] p-4 sm:p-5"
                >
                  <Icon className="text-xl text-[#0b63ad]" />
                  <h3 className="mt-4 font-display text-base font-semibold text-[#092f4f]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6faff]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Popular Programs"
              title="Choose a course that fits your goals"
              copy="Explore computer, programming, networking, data, AI and digital marketing options."
            />
            <Link
              to="/courses"
              className="focus-ring inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0b63ad]"
            >
              View all courses <FiArrowRight />
            </Link>
          </div>
          <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* placement sec*/}

      <section id="placement" className="section-pad bg-white">
        <div className="container-shell grid items-center gap-8 sm:gap-14 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
          <div>
            <div className="eyebrow">Career Support</div>
            <h2 className="section-title mt-4">Learn with career support</h2>
            <p className="section-copy mt-5">
              Training is only one part of the journey. Growth Bharat can
              support learners with placement-oriented guidance and practical
              career preparation.
            </p>
            <div className="mt-6 rounded-2xl border border-[#dceeff] bg-[#f5faff] p-5">
              <p className="text-sm leading-7 text-slate-600">
                We provide career guidance and placement assistance to support
                learners in their job search. Employment opportunities depend on
                skills, eligibility and current openings.
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {placementPoints.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="home-card rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
                  <Icon />
                </div>
                <h3 className="mt-4 font-display font-semibold text-[#092f4f]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6faff]">
        <div className="container-shell">
          <SectionHeading
            centered
            eyebrow="Learning Areas"
            title="Built around useful technology skills"
            copy="A straightforward learning catalogue covering foundational computer skills through modern technology topics."
          />
          <div className="mx-auto mt-7 grid max-w-none gap-3 sm:mt-9 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                FiMonitor,
                "Computer",
                "Essential applications and digital workplace skills",
              ],
              [
                FiCode,
                "Programming",
                "C, C++, Java and development fundamentals",
              ],
              [
                FiDatabase,
                "Data & AI",
                "Python, analytics, AI and data management",
              ],
              [
                FiPenTool,
                "Digital Marketing",
                "Modern marketing workflows and AI-assisted practices",
              ],
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="home-card rounded-2xl bg-white p-4 text-center card-border sm:p-6"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display font-semibold text-[#092f4f]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad home-tight-section bg-[#f5faff]">
        <div className="container-shell grid items-center gap-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]">
          <SectionHeading
            eyebrow="Learner voices"
            title="A learning journey that feels possible"
            copy="Good training gives you direction, practice and the confidence to keep moving forward."
          />
          <div className="relative rounded-3xl border border-[#dceeff] bg-white p-6 shadow-soft sm:p-7">
            <div className="mb-4 flex gap-1 text-[#f2ad24]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="fill-current" />
              ))}
              <span className="ml-auto rounded-full bg-[#eff8ff] px-3 py-1 text-[11px] font-bold text-[#0b63ad]">
                Learner review
              </span>
            </div>
            <p className="max-w-2xl font-display text-xl font-semibold leading-8 text-[#092f4f] sm:text-2xl">
              “{testimonial.quote}”
            </p>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b63ad] text-sm font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-[#092f4f]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#cfe7fa] text-[#0b63ad] hover:bg-[#eff8ff]"
                >
                  <FiChevronLeft />
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial + 1) % testimonials.length,
                    )
                  }
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#cfe7fa] text-[#0b63ad] hover:bg-[#eff8ff]"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.detail}
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#0b63ad]" : "w-2 bg-[#b9ddff]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad home-tight-section bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
          <SectionHeading
            eyebrow="FAQs"
            title="Questions before you begin?"
            copy="Here are a few helpful answers. Reach out to the Growth Bharat team if you need guidance for your specific goals."
          />
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-5 py-4 text-left font-display text-base font-semibold text-[#092f4f]"
                >
                  {question}
                  <FiChevronDown
                    className={`shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="-mt-1 pb-4 pr-8 text-sm leading-7 text-slate-600">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA compact />
    </div>
  );
}
