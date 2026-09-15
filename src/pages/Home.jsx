import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFileText,
  FiMessageCircle,
  FiMonitor,
  FiPenTool,
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

const popular = ["FCA", "ADIT", "DCN", "Data Analytics with Python", "AI in Digital Marketing", "Robotics and AI"]
  .map((name) => courses.find((course) => course.name === name))
  .filter(Boolean);

const benefits = [
  { icon: FiMonitor, title: "Practical Learning", text: "Focus on skills that can be applied beyond the classroom." },
  { icon: FiBriefcase, title: "Career-Oriented", text: "Course options designed around useful workplace skills." },
  { icon: FiUsers, title: "Guided Learning", text: "A supportive learning environment for beginners and learners." },
  { icon: FiMessageCircle, title: "Placement Assistance", text: "Career guidance and placement-oriented support." },
];

const placementPoints = [
  { icon: FiFileText, title: "Resume guidance", text: "Improve how you present your skills, projects and training." },
  { icon: FiMessageCircle, title: "Interview preparation", text: "Practice communication and interview-focused preparation." },
  { icon: FiUsers, title: "Career guidance", text: "Understand possible learning and career paths after training." },
  { icon: FiBriefcase, title: "Placement assistance", text: "Receive job-oriented support relevant to your training." },
];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#f5faff]">
        <div className="container-shell grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div>
            <div className="eyebrow">Computer & IT Training</div>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#092f4f] sm:text-5xl lg:text-[4.1rem]">
              Learn practical skills. <span className="text-[#1677c8]">Build your career.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Industry-focused computer, IT, data and AI courses with placement assistance to help you move confidently toward your career goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/courses" className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b63ad] px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#084f8c]">
                Explore Courses <FiArrowRight />
              </Link>
              <Link to="/contact" className="focus-ring inline-flex items-center justify-center rounded-lg border border-[#b9ddff] bg-white px-6 py-3.5 text-sm font-bold text-[#0b63ad] hover:bg-[#eff8ff]">
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2"><FiCheck className="text-[#1677c8]" /> Practical skill development</span>
              <span className="inline-flex items-center gap-2"><FiCheck className="text-[#1677c8]" /> Career support</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border-8 border-white bg-white hero-image">
              <img src={heroImage} alt="Students learning together in a training environment" className="h-[460px] w-full object-cover sm:h-[540px]" />
            </div>
            <div className="absolute -bottom-6 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-soft sm:left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eff8ff] text-[#0b63ad]"><FiCode /></span>
                <div>
                  <p className="text-sm font-bold text-[#092f4f]">Skills-first training</p>
                  <p className="mt-0.5 text-xs text-slate-500">Computer, IT, data & AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-white">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl">
            <img src={learningImage} alt="Learner working on a laptop during training" className="h-[440px] w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Mega Advance India"
              title="Skills that open doors"
              copy="Mega Advance India focuses on practical computer and technology education, helping learners build useful skills for study, work and career development."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl bg-[#f8fbfe] p-5">
                  <Icon className="text-xl text-[#0b63ad]" />
                  <h3 className="mt-4 font-display text-base font-semibold text-[#092f4f]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f6faff]">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Popular Programs"
              title="Choose a course that fits your goals"
              copy="Explore computer, programming, networking, data, AI and digital marketing options."
            />
            <Link to="/courses" className="focus-ring inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0b63ad]">
              View all courses <FiArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((course) => <CourseCard key={course.name} course={course} />)}
          </div>
        </div>
      </section>

      <section id="placement" className="section-pad bg-white">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="eyebrow">Career Support</div>
            <h2 className="section-title mt-4">Learn with career support</h2>
            <p className="section-copy mt-5">
              Training is only one part of the journey. Mega Advance India can support learners with placement-oriented guidance and practical career preparation.
            </p>
            <div className="mt-8 rounded-2xl border border-[#dceeff] bg-[#f5faff] p-5">
              <p className="text-sm leading-7 text-slate-600">
                Placement assistance is support, not a guarantee of employment. Specific opportunities depend on learner skills, eligibility and available openings.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {placementPoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display font-semibold text-[#092f4f]">{title}</h3>
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
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [FiMonitor, "Computer", "Essential applications and digital workplace skills"],
              [FiCode, "Programming", "C, C++, Java and development fundamentals"],
              [FiDatabase, "Data & AI", "Python, analytics, AI and data management"],
              [FiPenTool, "Digital Marketing", "Modern marketing workflows and AI-assisted practices"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center card-border">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]"><Icon /></div>
                <h3 className="mt-5 font-display font-semibold text-[#092f4f]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}