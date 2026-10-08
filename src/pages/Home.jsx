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
    name: "Ananya Sharma",
    role: "Data Analytics Student",
    location: "Bhopal",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    testimonial:
      "The training was practical and easy to understand. The instructors explained concepts clearly and helped me build confidence while working on real-world tasks.",
  },
  {
    name: "Rahul Verma",
    role: "Web Development Student",
    location: "Bhopal",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    testimonial:
      "I really enjoyed the learning experience. The sessions were structured well and gave me a better understanding of the skills I needed to improve.",
  },
  {
    name: "Neha Patel",
    role: "Digital Marketing Student",
    location: "Indore",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    testimonial:
      "The course helped me understand both the basics and practical side of digital marketing. I especially liked the hands-on learning approach.",
  },
  {
    name: "Aman Singh",
    role: "Computer Applications Student",
    location: "Bhopal",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    testimonial:
      "The overall experience was very positive. The learning environment was supportive, and I gained more confidence in using the tools and concepts covered during training.",
  },
  {
    name: "Pooja Mehta",
    role: "AI & Data Student",
    location: "Indore",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
    testimonial:
      "The sessions were informative and focused on practical understanding. It helped me connect what I was learning with real-world applications.",
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

// export default function Home() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const [openFaq, setOpenFaq] = useState(0);

//   useEffect(() => {
//     const timer = window.setInterval(() => {
//       setActiveTestimonial((current) => (current + 1) % testimonials.length);
//     }, 6000);
//     return () => window.clearInterval(timer);
//   }, []);

//   const testimonial = testimonials[activeTestimonial];

//   return (
//     <div className="home-page">
//       <section className="home-hero relative overflow-hidden bg-[#f3f9ff]">
//         <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full bg-[#cceaff]/60 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-white/80 blur-3xl" />
//         <div className="home-hero-inner container-shell relative grid min-h-0 items-center gap-8 py-8 pb-12 sm:gap-12 sm:py-12 sm:pb-16 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-12 xl:gap-16">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#b9ddff] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0b63ad]">
//               <span className="h-2 w-2 rounded-full bg-[#3aa8e8]" /> Learn.
//               Practise. Grow.
//             </div>
//             <h1 className="home-hero-title mt-4 max-w-2xl font-display text-[clamp(2.25rem,3.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#092f4f] sm:mt-5">
//               Turn curiosity into{" "}
//               <span className="text-[#1677c8]">career-ready skills.</span>
//             </h1>
//             <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
//               Build a stronger digital future with practical computer, IT, data
//               and AI training, guided learning and placement-oriented career
//               support.
//             </p>
//             <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
//               <Link
//                 to="/courses"
//                 className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b63ad] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#084f8c] sm:px-6 sm:py-3.5"
//               >
//                 Explore Courses <FiArrowRight />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="focus-ring inline-flex items-center justify-center rounded-lg border border-[#b9ddff] bg-white px-5 py-3 text-sm font-bold text-[#0b63ad] hover:bg-[#eff8ff] sm:px-6 sm:py-3.5"
//               >
//                 Contact Us
//               </Link>
//             </div>

//             <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:mt-8 sm:gap-x-7 sm:gap-y-3 sm:text-sm">
//               <span className="inline-flex items-center gap-2">
//                 <FiCheck className="text-[#1677c8]" /> Practical skill
//                 development
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <FiCheck className="text-[#1677c8]" /> Career support
//               </span>
//             </div>
//             <div className="mt-6 hidden max-w-xl grid-cols-3 gap-5 border-t border-[#cfe7fa] pt-5 sm:mt-8 sm:grid">
//               <div>
//                 <p className="font-display text-2xl font-bold text-[#092f4f]">
//                   6+
//                 </p>
//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Popular learning paths
//                 </p>
//               </div>
//               <div>
//                 <p className="font-display text-2xl font-bold text-[#092f4f]">
//                   4
//                 </p>
//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Core learning areas
//                 </p>
//               </div>
//               <div>
//                 <p className="font-display text-2xl font-bold text-[#092f4f]">
//                   1:1
//                 </p>
//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Guidance when needed
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="home-hero-media relative mx-auto mt-2 w-full min-w-0 max-w-lg lg:mt-0 lg:justify-self-end">
//             <div className="absolute -left-5 top-8 z-10 hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-soft sm:block">
//               <div className="flex items-center gap-3">
//                 <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eff8ff] text-[#0b63ad]">
//                   <FiStar />
//                 </span>
//                 <div>
//                   <p className="text-sm font-bold text-[#092f4f]">
//                     Learn with purpose
//                   </p>
//                   <p className="mt-0.5 text-xs text-slate-500">
//                     Skills for your next step
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-hidden rounded-[28px] border-8 border-white bg-white hero-image">
//               <img
//                 src={heroImage}
//                 alt="Students learning together in a training environment"
//                 className="h-[230px] w-full object-cover sm:h-[390px] lg:h-[440px] xl:h-[470px]"
//               />
//             </div>
//             <div className="absolute -bottom-4 right-3 max-w-[220px] rounded-2xl bg-[#092f4f] p-3 text-white shadow-soft sm:-bottom-5 sm:right-7 sm:max-w-[250px] sm:p-4">
//               <div className="flex items-center gap-3">
//                 <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[#8ed4ff]">
//                   <FiCode />
//                 </span>
//                 <div>
//                   <p className="text-sm font-bold">Skills-first training</p>
//                   <p className="mt-0.5 text-xs text-slate-300">
//                     Computer, IT, data & AI
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="border-b border-slate-200 bg-white">
//         <div className="container-shell grid grid-cols-2 divide-x divide-slate-200 py-4 sm:grid-cols-4 sm:py-5">
//           {[
//             "Computer skills",
//             "Programming",
//             "Data & AI",
//             "Digital marketing",
//           ].map((label, index) => (
//             <Link
//               key={label}
//               to="/courses"
//               className={`group px-3 text-center text-xs font-bold text-slate-600 transition hover:text-[#0b63ad] sm:text-sm ${index > 1 ? "mt-3 sm:mt-0" : ""}`}
//             >
//               <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3aa8e8] sm:text-[11px]">
//                 0{index + 1}
//               </span>
//               <span className="mt-1 block">{label}</span>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <section id="about" className="section-pad overflow-hidden bg-[#f8fbfd]">
//         <div className="container-shell">
//           {/* =========================================================
//         INTRO
//     ========================================================= */}

//           <div className="grid gap-7 border-b border-slate-200 pb-7 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] md:items-center md:gap-12 lg:gap-20 lg:pb-9">
//             {/* Left */}
//             <div className="max-w-2xl">
//               <div className="mb-3 flex items-center gap-2.5">
//                 <span className="h-[2px] w-7 bg-[#0b63ad]" />

//                 <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b63ad]">
//                   About Growth Bharat
//                 </span>
//               </div>

//               <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[#092f4f]">
//                 Education that helps
//                 <span className="block text-[#0b63ad]">you move forward.</span>
//               </h2>
//             </div>

//             {/* Right */}
//             <div className="relative max-w-xl border-l-2 border-[#d9eaf5] pl-5 md:pl-7">
//               <p className="text-[15px] leading-[1.7] text-slate-600 sm:text-base">
//                 Growth Bharat focuses on practical computer and technology
//                 education, helping learners develop relevant skills for study,
//                 work and career development.
//               </p>

//               <p className="mt-3 text-sm leading-6 text-slate-500">
//                 From foundational computer education to emerging technology
//                 skills, we keep learning practical, accessible and connected to
//                 real-world opportunities.
//               </p>

//               <div className="mt-4 flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#0b63ad]" />

//                 <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
//                   Learn • Grow • Progress
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* =========================================================
//         MAIN CONTENT
//     ========================================================= */}
//           <div className="mt-7 grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:gap-5">
//             {/* =======================================================
//           IMAGE PANEL
//       ======================================================= */}
//             <div className="group relative min-h-[350px] overflow-hidden rounded-[1.25rem] sm:min-h-[430px] lg:min-h-[480px]">
//               <img
//                 src={learningImage}
//                 alt="Learner working on a laptop during training"
//                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#061c2d]/90 via-[#061c2d]/25 to-transparent" />

//               {/* Image Content */}
//               <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
//                 <div className="max-w-lg">
//                   <span className="inline-flex bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
//                     Learn with purpose
//                   </span>

//                   <h3 className="mt-3 font-display text-[clamp(1.65rem,3vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white">
//                     Build knowledge.
//                     <br />
//                     Build confidence.
//                   </h3>

//                   <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
//                     Practical learning experiences designed to help learners
//                     take their next step with greater confidence.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* =======================================================
//           WHY GROWTH BHARAT
//       ======================================================= */}
//             <div className="flex flex-col overflow-hidden rounded-[1.25rem] bg-[#092f4f]">
//               {/* Header */}
//               <div className="p-6 sm:p-7">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7dc9ef]">
//                   Why learners choose us
//                 </p>

//                 <h3 className="mt-2.5 max-w-sm font-display text-xl font-bold leading-[1.25] text-white sm:text-[1.4rem]">
//                   Skills that have a purpose beyond the classroom.
//                 </h3>
//               </div>

//               {/* Benefits */}
//               <div className="mt-auto">
//                 {benefits.map(({ icon: Icon, title, text }, index) => (
//                   <div
//                     key={title}
//                     className="group border-t border-white/10 px-6 py-4 transition-colors duration-200 hover:bg-white/[0.05] sm:px-7"
//                   >
//                     <div className="flex gap-3">
//                       {/* Icon */}
//                       <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#7dc9ef]">
//                         <Icon className="text-sm" />
//                       </span>

//                       {/* Content */}
//                       <div className="min-w-0">
//                         <div className="flex items-center gap-2">
//                           <span className="text-[9px] font-bold tracking-wide text-white/30">
//                             0{index + 1}
//                           </span>

//                           <h4 className="text-sm font-bold text-white">
//                             {title}
//                           </h4>
//                         </div>

//                         <p className="mt-1 text-xs leading-[1.55] text-white/55">
//                           {text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* =========================================================
//         BRAND VALUES
//     ========================================================= */}
//           <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-[1rem] border border-slate-200 bg-white sm:grid-cols-4">
//             {/* Focus */}
//             <div className="border-b border-r border-slate-200 p-4 sm:border-b-0 sm:p-5">
//               <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
//                 Focus
//               </p>

//               <p className="mt-1.5 text-sm font-bold text-[#092f4f]">
//                 Practical Skills
//               </p>
//             </div>

//             {/* Approach */}
//             <div className="border-b border-slate-200 p-4 sm:border-b-0 sm:border-r sm:p-5">
//               <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
//                 Approach
//               </p>

//               <p className="mt-1.5 text-sm font-bold text-[#092f4f]">
//                 Career Oriented
//               </p>
//             </div>

//             {/* Learning */}
//             <div className="border-r border-slate-200 p-4 sm:p-5">
//               <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
//                 Learning
//               </p>

//               <p className="mt-1.5 text-sm font-bold text-[#092f4f]">
//                 Technology Focused
//               </p>
//             </div>

//             {/* Goal */}
//             <div className="p-4 sm:p-5">
//               <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
//                 Goal
//               </p>

//               <p className="mt-1.5 text-sm font-bold text-[#092f4f]">
//                 Better Opportunities
//               </p>
//             </div>
//           </div>
//           {/* =========================================================
//         SMALL RESPONSIVE DETAIL
//     ========================================================= */}
//           <div className="mt-5 flex flex-col gap-2 border-l-2 border-[#0b63ad] pl-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
//             <p className="max-w-2xl text-xs leading-5 text-slate-500">
//               Learning should be practical, accessible and relevant to the
//               opportunities learners want to pursue.
//             </p>

//             <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
//               Learn • Grow • Progress
//             </span>
//           </div>
//         </div>
//       </section>

//       <section className="section-pad bg-[#f6faff]">
//         <div className="container-shell">
//           <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
//             <SectionHeading
//               eyebrow="Popular Programs"
//               title="Choose a course that fits your goals"
//               copy="Explore computer, programming, networking, data, AI and digital marketing options."
//             />
//             <Link
//               to="/courses"
//               className="focus-ring inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0b63ad]"
//             >
//               View all courses <FiArrowRight />
//             </Link>
//           </div>
//           <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {popular.map((course) => (
//               <CourseCard key={course.name} course={course} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================
//     PLACEMENT / CAREER SUPPORT
// ========================= */}
//       <section id="placement" className="bg-white py-2 sm:py-5 lg:py-5">
//         <div className="container-shell">
//           <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
//             {/* LEFT CONTENT */}
//             <div className="flex flex-col justify-center">
//               <div className="eyebrow">Career Support</div>

//               <h2 className="section-title  max-w-xl">
//                 Learn with career support
//               </h2>

//               <p className="section-copy mt-3 max-w-xl">
//                 Training is only one part of the journey. Growth Bharat supports
//                 learners with practical career preparation, guidance and
//                 placement-oriented assistance.
//               </p>

//               <div className="mt-5 border-l-4 border-[#8bc349] bg-[#f5faff] px-4 py-3">
//                 <p className="text-sm leading-6 text-slate-600">
//                   We provide career guidance and placement assistance to help
//                   learners prepare for their job search. Opportunities depend on
//                   skills, eligibility and current openings.
//                 </p>
//               </div>

//               <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-[#8bc349]" />
//                   <span className="text-xs font-semibold text-[#092f4f]">
//                     Career Guidance
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-[#0b63ad]" />
//                   <span className="text-xs font-semibold text-[#092f4f]">
//                     Job Preparation
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-[#8bc349]" />
//                   <span className="text-xs font-semibold text-[#092f4f]">
//                     Placement Assistance
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
//               {placementPoints.map(({ icon: Icon, title, text }, index) => (
//                 <div
//                   key={title}
//                   className="group relative border border-[#dceaf3] bg-white p-4 transition-all duration-300 hover:border-[#b8d8ee] hover:bg-[#f9fcff] sm:p-5"
//                 >
//                   {/* Number */}
//                   <span className="absolute right-4 top-3 font-display text-xs font-bold text-slate-200">
//                     0{index + 1}
//                   </span>

//                   {/* Icon */}
//                   <div className="flex h-10 w-10 items-center justify-center bg-[#eff8ff] text-lg text-[#0b63ad] transition-colors duration-300 group-hover:bg-[#0b63ad] group-hover:text-white">
//                     <Icon />
//                   </div>

//                   <h3 className="mt-4 pr-8 font-display text-base font-bold text-[#092f4f]">
//                     {title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-slate-600">
//                     {text}
//                   </p>

//                   <div className="mt-4 h-[2px] w-7 bg-[#8bc349] transition-all duration-300 group-hover:w-12" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-pad bg-[#f6faff]">
//         <div className="container-shell">
//           <SectionHeading
//             centered
//             eyebrow="Learning Areas"
//             title="Built around useful technology skills"
//             copy="A straightforward learning catalogue covering foundational computer skills through modern technology topics."
//           />
//           <div className="mx-auto mt-7 grid max-w-none gap-3 sm:mt-9 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               [
//                 FiMonitor,
//                 "Computer",
//                 "Essential applications and digital workplace skills",
//               ],
//               [
//                 FiCode,
//                 "Programming",
//                 "C, C++, Java and development fundamentals",
//               ],
//               [
//                 FiDatabase,
//                 "Data & AI",
//                 "Python, analytics, AI and data management",
//               ],
//               [
//                 FiPenTool,
//                 "Digital Marketing",
//                 "Modern marketing workflows and AI-assisted practices",
//               ],
//             ].map(([Icon, title, text]) => (
//               <div
//                 key={title}
//                 className="home-card rounded-2xl bg-white p-4 text-center card-border sm:p-6"
//               >
//                 <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#eff8ff] text-xl text-[#0b63ad]">
//                   <Icon />
//                 </div>
//                 <h3 className="mt-5 font-display font-semibold text-[#092f4f]">
//                   {title}
//                 </h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* <section className="section-pad home-tight-section bg-[#f5faff]">
//         <div className="container-shell grid items-center gap-6 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]">
//           <SectionHeading
//             eyebrow="Learner voices"
//             title="A learning journey that feels possible"
//             copy="Good training gives you direction, practice and the confidence to keep moving forward."
//           />
//           <div className="relative rounded-3xl border border-[#dceeff] bg-white p-6 shadow-soft sm:p-7">
//             <div className="mb-4 flex gap-1 text-[#f2ad24]">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <FiStar key={star} className="fill-current" />
//               ))}
//               <span className="ml-auto rounded-full bg-[#eff8ff] px-3 py-1 text-[11px] font-bold text-[#0b63ad]">
//                 Learner review
//               </span>
//             </div>
//             <p className="max-w-2xl font-display text-xl font-semibold leading-8 text-[#092f4f] sm:text-2xl">
//               “{testimonial.quote}”
//             </p>
//             <div className="mt-5 flex items-end justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b63ad] text-sm font-bold text-white">
//                   {testimonial.initials}
//                 </span>
//                 <div>
//                   <p className="text-sm font-bold text-[#092f4f]">
//                     {testimonial.name}
//                   </p>
//                   <p className="mt-1 text-sm text-slate-500">
//                     {testimonial.detail}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   aria-label="Previous testimonial"
//                   onClick={() =>
//                     setActiveTestimonial(
//                       (activeTestimonial - 1 + testimonials.length) %
//                         testimonials.length,
//                     )
//                   }
//                   className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#cfe7fa] text-[#0b63ad] hover:bg-[#eff8ff]"
//                 >
//                   <FiChevronLeft />
//                 </button>
//                 <button
//                   aria-label="Next testimonial"
//                   onClick={() =>
//                     setActiveTestimonial(
//                       (activeTestimonial + 1) % testimonials.length,
//                     )
//                   }
//                   className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#cfe7fa] text-[#0b63ad] hover:bg-[#eff8ff]"
//                 >
//                   <FiChevronRight />
//                 </button>
//               </div>
//             </div>
//             <div className="mt-4 flex gap-2">
//               {testimonials.map((item, index) => (
//                 <button
//                   key={item.detail}
//                   aria-label={`Show testimonial ${index + 1}`}
//                   onClick={() => setActiveTestimonial(index)}
//                   className={`h-1.5 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-[#0b63ad]" : "w-2 bg-[#b9ddff]"}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}
//       <section className="relative overflow-hidden bg-[#f5faff] py-5 sm:py-12 lg:py-14">
//         {/* Subtle decorative accents */}
//         <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-[#8bc349]/10 blur-3xl" />
//         <div className="pointer-events-none absolute -right-20 bottom-10 h-52 w-52 rounded-full bg-[#0b63ad]/10 blur-3xl" />

//         <div className="relative mx-auto w-[94%] max-w-[1380px]">
//           {/* Heading */}
//           <div className="mb-8 text-center sm:mb-10">
//             <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0b63ad]">
//               <span className="h-[2px] w-7 bg-[#8bc349]" />
//               Learner Voices
//               <span className="h-[2px] w-7 bg-[#8bc349]" />
//             </span>

//             <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight text-[#092f4f] sm:text-3xl lg:text-[38px]">
//               What Our Learners{" "}
//               <span className="text-[#0b63ad]">Say About Us</span>
//             </h2>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]">
//               Real learning experiences from students who are building practical
//               skills and preparing themselves for better career opportunities.
//             </p>
//           </div>

//           {/* Trust strip */}
//           <div className="mx-auto mb-7 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-[#dceaf3] py-3 text-sm sm:mb-8">
//             <div className="flex items-center gap-2">
//               <div className="flex text-[#f5b301]">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span key={star}>★</span>
//                 ))}
//               </div>
//               <span className="font-bold text-[#092f4f]">4.9/5</span>
//             </div>

//             <span className="hidden h-4 w-px bg-[#dceaf3] sm:block" />

//             <span className="text-slate-600">
//               Trusted by learners across different programs
//             </span>
//           </div>

//           {/* Main testimonial */}
//           <div className="relative mx-auto max-w-5xl">
//             {/* Large quote mark */}
//             <div className="pointer-events-none absolute -left-1 -top-8 select-none font-serif text-[100px] font-bold leading-none text-[#0b63ad]/10 sm:-left-5 sm:-top-10 sm:text-[130px]">
//               “
//             </div>

//             <div className="relative px-2 sm:px-8 lg:px-12">
//               {/* Testimonial text */}
//               <div className="mx-auto max-w-4xl text-center">
//                 <p className="text-[19px] font-medium leading-8 text-[#092f4f] sm:text-2xl sm:leading-10 lg:text-[29px] lg:leading-[1.45]">
//                   “{testimonials[activeTestimonial].testimonial}”
//                 </p>
//               </div>

//               {/* Profile */}
//               <div className="mt-7 flex flex-col items-center justify-center sm:mt-8">
//                 <div className="relative">
//                   {/* Outer accent ring */}
//                   <div className="absolute -inset-1 rounded-full border border-[#8bc349]" />

//                   <img
//                     src={testimonials[activeTestimonial].image}
//                     alt={testimonials[activeTestimonial].name}
//                     className="relative h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-lg sm:h-[72px] sm:w-[72px]"
//                   />

//                   <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#8bc349] text-[11px] font-bold text-white">
//                     ✓
//                   </span>
//                 </div>

//                 <h3 className="mt-3 text-base font-bold text-[#092f4f] sm:text-lg">
//                   {testimonials[activeTestimonial].name}
//                 </h3>

//                 <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
//                   {testimonials[activeTestimonial].role} ·{" "}
//                   {testimonials[activeTestimonial].location}
//                 </p>

//                 <div className="mt-2 flex items-center gap-1">
//                   <div className="flex text-sm text-[#f5b301]">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <span key={star}>★</span>
//                     ))}
//                   </div>
//                   <span className="ml-1 text-xs font-semibold text-slate-500">
//                     {testimonials[activeTestimonial].rating}
//                   </span>
//                 </div>
//               </div>

//               {/* Navigation */}
//               <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8">
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveTestimonial(
//                       (activeTestimonial - 1 + testimonials.length) %
//                         testimonials.length,
//                     )
//                   }
//                   aria-label="Previous testimonial"
//                   className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#cbdde8] bg-white text-[#0b63ad] transition-all duration-300 hover:border-[#0b63ad] hover:bg-[#0b63ad] hover:text-white"
//                 >
//                   <span className="text-lg transition-transform group-hover:-translate-x-0.5">
//                     ←
//                   </span>
//                 </button>

//                 {/* Progress */}
//                 <div className="flex items-center gap-1.5">
//                   {testimonials.map((_, index) => (
//                     <button
//                       key={index}
//                       type="button"
//                       onClick={() => setActiveTestimonial(index)}
//                       aria-label={`Go to testimonial ${index + 1}`}
//                       className={`h-1 rounded-full transition-all duration-300 ${
//                         index === activeTestimonial
//                           ? "w-8 bg-[#0b63ad]"
//                           : "w-4 bg-[#c9dce8] hover:bg-[#8bc349]"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setActiveTestimonial(
//                       (activeTestimonial + 1) % testimonials.length,
//                     )
//                   }
//                   aria-label="Next testimonial"
//                   className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#cbdde8] bg-white text-[#0b63ad] transition-all duration-300 hover:border-[#0b63ad] hover:bg-[#0b63ad] hover:text-white"
//                 >
//                   <span className="text-lg transition-transform group-hover:translate-x-0.5">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Stats — compact, no big cards */}
//           <div className="mx-auto mt-9 grid max-w-4xl grid-cols-2 border-y border-[#dceaf3] sm:mt-10 sm:grid-cols-4">
//             {[
//               ["1,500+", "Learners Trained"],
//               ["4.9/5", "Average Rating"],
//               ["95%", "Positive Feedback"],
//               ["20+", "Learning Programs"],
//             ].map(([value, label], index) => (
//               <div
//                 key={label}
//                 className={`px-3 py-4 text-center ${
//                   index < 3 ? "border-r border-[#dceaf3]" : ""
//                 }`}
//               >
//                 <div className="text-xl font-bold text-[#0b63ad] sm:text-2xl">
//                   {value}
//                 </div>
//                 <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
//                   {label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom highlights */}
//           <div className="mx-auto mt-7 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">
//             {[
//               {
//                 number: "01",
//                 title: "Practical Learning",
//                 text: "Focused on useful skills and real-world understanding.",
//               },
//               {
//                 number: "02",
//                 title: "Expert Guidance",
//                 text: "Supportive instructors who make learning easier.",
//               },
//               {
//                 number: "03",
//                 title: "Career Focused",
//                 text: "Learning designed to build confidence for the workplace.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.number}
//                 className="group border-l-2 border-[#8bc349] bg-white/60 px-4 py-3 transition-all duration-300 hover:bg-white"
//               >
//                 <div className="flex items-start gap-3">
//                   <span className="text-xs font-bold text-[#0b63ad]">
//                     {item.number}
//                   </span>

//                   <div>
//                     <h4 className="text-sm font-bold text-[#092f4f]">
//                       {item.title}
//                     </h4>
//                     <p className="mt-1 text-xs leading-5 text-slate-500">
//                       {item.text}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
//         <div className="container-shell relative">
//           <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
//             {/* LEFT SECTION */}
//             <div className="lg:sticky lg:top-24">
//               <div className="mb-4 flex items-center gap-3">
//                 <span className="h-[2px] w-8 bg-[#8bc349]" />
//                 <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b63ad]">
//                   FAQs
//                 </span>
//               </div>

//               <h2 className="font-display text-3xl font-bold leading-[1.15] text-[#092f4f] sm:text-4xl lg:text-[42px]">
//                 Everything You
//                 <br />
//                 <span className="text-[#0b63ad]">Need To Know.</span>
//               </h2>

//               <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
//                 Have questions about our courses, training process or learning
//                 programs? We have answered some of the most common questions to
//                 help you get started with confidence.
//               </p>

//               {/* Creative info block */}
//               <div className="mt-7 border-l-4 border-[#8bc349] bg-[#f5faff] px-5 py-4">
//                 <p className="text-sm font-semibold text-[#092f4f]">
//                   Can't find what you're looking for?
//                 </p>

//                 <p className="mt-1 text-xs leading-5 text-slate-500">
//                   Our team can help you choose the right learning path.
//                 </p>

//                 <a
//                   href="/contact"
//                   className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#0b63ad] transition-all hover:text-[#8bc349]"
//                 >
//                   Talk to our team
//                   <span className="transition-transform duration-200 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </a>
//               </div>

//               {/* Decorative learning mark */}
//               <div className="mt-8 hidden lg:flex items-center gap-3">
//                 <div className="flex -space-x-2">
//                   <span className="h-8 w-8 rounded-full border-2 border-white bg-[#0b63ad]" />
//                   <span className="h-8 w-8 rounded-full border-2 border-white bg-[#8bc349]" />
//                   <span className="h-8 w-8 rounded-full border-2 border-white bg-[#092f4f]" />
//                 </div>

//                 <span className="text-xs font-medium text-slate-500">
//                   Helping learners move forward
//                 </span>
//               </div>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="relative">
//               {/* Small top label */}
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                   Common Questions
//                 </span>

//                 <span className="text-xs font-bold text-[#8bc349]">
//                   {String(faqs.length).padStart(2, "0")} Answers
//                 </span>
//               </div>

//               <div className="border-t border-[#dceaf3]">
//                 {faqs.map(([question, answer], index) => {
//                   const isOpen = openFaq === index;

//                   return (
//                     <div
//                       key={question}
//                       className={`border-b border-[#dceaf3] transition-all duration-300 ${
//                         isOpen ? "bg-[#f7fbfe]" : "bg-white"
//                       }`}
//                     >
//                       <button
//                         type="button"
//                         onClick={() => setOpenFaq(isOpen ? -1 : index)}
//                         className="focus-ring group flex w-full items-center gap-4 px-2 py-5 text-left sm:px-3 sm:py-6"
//                       >
//                         {/* Number */}
//                         <span
//                           className={`w-9 shrink-0 text-xs font-bold transition-colors duration-300 ${
//                             isOpen
//                               ? "text-[#8bc349]"
//                               : "text-slate-300 group-hover:text-[#0b63ad]"
//                           }`}
//                         >
//                           {String(index + 1).padStart(2, "0")}
//                         </span>

//                         {/* Question */}
//                         <span
//                           className={`flex-1 font-display text-sm font-semibold leading-6 transition-colors sm:text-base lg:text-[17px] ${
//                             isOpen
//                               ? "text-[#0b63ad]"
//                               : "text-[#092f4f] group-hover:text-[#0b63ad]"
//                           }`}
//                         >
//                           {question}
//                         </span>

//                         {/* Creative icon */}
//                         <span
//                           className={`relative flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ${
//                             isOpen
//                               ? "bg-[#0b63ad] text-white"
//                               : "bg-[#f1f7fa] text-[#092f4f] group-hover:bg-[#8bc349] group-hover:text-white"
//                           }`}
//                         >
//                           <FiChevronDown
//                             className={`text-base transition-transform duration-300 ${
//                               isOpen ? "rotate-180" : ""
//                             }`}
//                           />
//                         </span>
//                       </button>

//                       {/* Answer */}
//                       <div
//                         className={`grid transition-[grid-template-rows] duration-300 ease-out ${
//                           isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
//                         }`}
//                       >
//                         <div className="overflow-hidden">
//                           <div className="pb-6 pl-[3.25rem] pr-10 sm:pl-[3.5rem]">
//                             <div className="relative border-l-2 border-[#8bc349] pl-4">
//                               <p className="max-w-2xl text-sm leading-7 text-slate-600">
//                                 {answer}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <EnquiryCTA compact />
//     </div>
//   );
// }
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

        <div className="home-hero-inner container-shell relative grid min-h-0 items-center gap-6 py-6 pb-8 sm:gap-8 sm:py-8 sm:pb-10 lg:min-h-[500px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:py-8 xl:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b9ddff] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0b63ad]">
              <span className="h-2 w-2 rounded-full bg-[#3aa8e8]" />
              Learn. Practise. Grow.
            </div>

            <h1 className="home-hero-title mt-3 max-w-2xl font-display text-[clamp(2.1rem,3.2vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.035em] text-[#092f4f] sm:mt-5">
              Turn curiosity into{" "}
              <span className="text-[#1677c8]">career-ready skills.</span>
            </h1>

            <p className="mt-3 max-w-xl text-[0.95rem] leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              Build a stronger digital future with practical computer, IT, data
              and AI training, guided learning and placement-oriented career
              support.
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:gap-3">
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

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:mt-5 sm:gap-x-6 sm:gap-y-2 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <FiCheck className="text-[#1677c8]" />
                Practical skill development
              </span>

              <span className="inline-flex items-center gap-2">
                <FiCheck className="text-[#1677c8]" />
                Career support
              </span>
            </div>

            <div className="mt-5 hidden max-w-xl grid-cols-3 gap-4 border-t border-[#cfe7fa] pt-4 sm:mt-6 sm:grid">
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

          <div className="home-hero-media relative mx-auto mt-1 w-full min-w-0 max-w-lg lg:mt-0 lg:justify-self-end">
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
                className="h-[210px] w-full object-cover sm:h-[340px] lg:h-[400px] xl:h-[430px]"
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
        <div className="container-shell grid grid-cols-2 divide-x divide-slate-200 py-3 sm:grid-cols-4 sm:py-4">
          {[
            "Computer skills",
            "Programming",
            "Data & AI",
            "Digital marketing",
          ].map((label, index) => (
            <Link
              key={label}
              to="/courses"
              className={`group px-3 text-center text-xs font-bold text-slate-600 transition hover:text-[#0b63ad] sm:text-sm ${
                index > 1 ? "mt-2 sm:mt-0" : ""
              }`}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#3aa8e8] sm:text-[11px]">
                0{index + 1}
              </span>
              <span className="mt-1 block">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad overflow-hidden bg-[#f8fbfd]">
        <div className="container-shell">
          {/* =========================================================
              INTRO
          ========================================================= */}

          <div className="grid gap-5 border-b border-slate-200 pb-5 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] md:items-center md:gap-8 lg:gap-10 lg:pb-6">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="h-[2px] w-7 bg-[#0b63ad]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b63ad]">
                  About Growth Bharat
                </span>
              </div>

              <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[#092f4f]">
                Education that helps
                <span className="block text-[#0b63ad]">you move forward.</span>
              </h2>
            </div>

            <div className="relative max-w-xl border-l-2 border-[#d9eaf5] pl-5 md:pl-7">
              <p className="text-[15px] leading-[1.7] text-slate-600 sm:text-base">
                Growth Bharat focuses on practical computer and technology
                education, helping learners develop relevant skills for study,
                work and career development.
              </p>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                From foundational computer education to emerging technology
                skills, we keep learning practical, accessible and connected to
                real-world opportunities.
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#0b63ad]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
                  Learn • Grow • Progress
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================
              MAIN CONTENT
          ========================================================= */}

          <div className="mt-5 grid gap-3 lg:grid-cols-[1.35fr_0.65fr] lg:gap-4">
            {/* =======================================================
                IMAGE PANEL
            ======================================================= */}

            <div className="group relative min-h-[300px] overflow-hidden rounded-[1.25rem] sm:min-h-[360px] lg:min-h-[410px]">
              <img
                src={learningImage}
                alt="Learner working on a laptop during training"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061c2d]/90 via-[#061c2d]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <div className="max-w-lg">
                  <span className="inline-flex bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
                    Learn with purpose
                  </span>

                  <h3 className="mt-3 font-display text-[clamp(1.65rem,3vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white">
                    Build knowledge.
                    <br />
                    Build confidence.
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                    Practical learning experiences designed to help learners
                    take their next step with greater confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* =======================================================
                WHY GROWTH BHARAT
            ======================================================= */}

            <div className="flex flex-col overflow-hidden rounded-[1.25rem] bg-[#092f4f]">
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7dc9ef]">
                  Why learners choose us
                </p>

                <h3 className="mt-2.5 max-w-sm font-display text-xl font-bold leading-[1.25] text-white sm:text-[1.4rem]">
                  Skills that have a purpose beyond the classroom.
                </h3>
              </div>

              <div className="mt-auto">
                {benefits.map(({ icon: Icon, title, text }, index) => (
                  <div
                    key={title}
                    className="group border-t border-white/10 px-5 py-3 transition-colors duration-200 hover:bg-white/[0.05] sm:px-6"
                  >
                    <div className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#7dc9ef]">
                        <Icon className="text-sm" />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-wide text-white/30">
                            0{index + 1}
                          </span>

                          <h4 className="text-sm font-bold text-white">
                            {title}
                          </h4>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-white/55">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              BRAND VALUES
          ========================================================= */}

          <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-[1rem] border border-slate-200 bg-white sm:grid-cols-4">
            <div className="border-b border-r border-slate-200 p-3 sm:border-b-0 sm:p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Focus
              </p>

              <p className="mt-1 text-sm font-bold text-[#092f4f]">
                Practical Skills
              </p>
            </div>

            <div className="border-b border-slate-200 p-3 sm:border-b-0 sm:border-r sm:p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Approach
              </p>

              <p className="mt-1 text-sm font-bold text-[#092f4f]">
                Career Oriented
              </p>
            </div>

            <div className="border-r border-slate-200 p-3 sm:p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Learning
              </p>

              <p className="mt-1 text-sm font-bold text-[#092f4f]">
                Technology Focused
              </p>
            </div>

            <div className="p-3 sm:p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Goal
              </p>

              <p className="mt-1 text-sm font-bold text-[#092f4f]">
                Better Opportunities
              </p>
            </div>
          </div>

          {/* =========================================================
              SMALL RESPONSIVE DETAIL
          ========================================================= */}

          <div className="mt-4 flex flex-col gap-2 border-l-2 border-[#0b63ad] pl-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="max-w-2xl text-xs leading-5 text-slate-500">
              Learning should be practical, accessible and relevant to the
              opportunities learners want to pursue.
            </p>

            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b63ad]">
              Learn • Grow • Progress
            </span>
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

          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PLACEMENT / CAREER SUPPORT
      ========================= */}

      <section id="placement" className="bg-white sm:py-4 lg:py-4">
        <div className="container-shell">
          <div className="grid items-stretch gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            {/* LEFT CONTENT */}

            <div className="flex flex-col justify-center">
              <div className="eyebrow">Career Support</div>

              <h2 className="section-title max-w-xl">
                Learn with career support
              </h2>

              <p className="section-copy mt-3 max-w-xl">
                Training is only one part of the journey. Growth Bharat supports
                learners with practical career preparation, guidance and
                placement-oriented assistance.
              </p>

              <div className="mt-3 border-l-4 border-[#8bc349] bg-[#f5faff] px-4 py-3">
                <p className="text-sm leading-6 text-slate-600">
                  We provide career guidance and placement assistance to help
                  learners prepare for their job search. Opportunities depend on
                  skills, eligibility and current openings.
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8bc349]" />
                  <span className="text-xs font-semibold text-[#092f4f]">
                    Career Guidance
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0b63ad]" />
                  <span className="text-xs font-semibold text-[#092f4f]">
                    Job Preparation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8bc349]" />
                  <span className="text-xs font-semibold text-[#092f4f]">
                    Placement Assistance
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
              {placementPoints.map(({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className="group relative border border-[#dceaf3] bg-white p-3 transition-all duration-300 hover:border-[#b8d8ee] hover:bg-[#f9fcff] sm:p-4"
                >
                  <span className="absolute right-4 top-3 font-display text-xs font-bold text-slate-200">
                    0{index + 1}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center bg-[#eff8ff] text-lg text-[#0b63ad] transition-colors duration-300 group-hover:bg-[#0b63ad] group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-3 pr-8 font-display text-base font-bold text-[#092f4f]">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-5 text-slate-600">
                    {text}
                  </p>

                  <div className="mt-3 h-[2px] w-7 bg-[#8bc349] transition-all duration-300 group-hover:w-12" />
                </div>
              ))}
            </div>
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

          <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                FiMonitor,
                "01",
                "Computer",
                "Essential applications and digital workplace skills",
              ],
              [
                FiCode,
                "02",
                "Programming",
                "C, C++, Java and development fundamentals",
              ],
              [
                FiDatabase,
                "03",
                "Data & AI",
                "Python, analytics, AI and data management",
              ],
              [
                FiPenTool,
                "04",
                "Digital Marketing",
                "Modern marketing workflows and AI-assisted practices",
              ],
            ].map(([Icon, number, title, text]) => (
              <div
                key={title}
                className="group relative overflow-hidden border border-[#dceaf3] bg-white px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8bc349] hover:shadow-[0_12px_30px_rgba(11,99,173,0.10)] sm:px-5 sm:py-6"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#edf7ff] text-xl text-[#0b63ad] transition-all duration-300 group-hover:bg-[#0b63ad] group-hover:text-white">
                    <Icon />
                  </div>

                  <span className="font-display text-xs font-bold tracking-[0.16em] text-[#8bc349]">
                    {number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="font-display text-lg font-semibold text-[#092f4f]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {text}
                  </p>
                </div>

                {/* Bottom indicator */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-7 rounded-full bg-[#8bc349] transition-all duration-300 group-hover:w-12" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Learning Area
                  </span>
                </div>

                {/* Decorative background number */}
                <span className="pointer-events-none absolute -bottom-7 -right-2 select-none font-display text-[90px] font-extrabold leading-none text-[#f4f9fc] transition-colors duration-300 group-hover:text-[#eef7fb]">
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5faff] py-5 sm:py-6 lg:py-7">
        <div className="mx-auto w-[94%] max-w-[1380px]">
          {/* Heading */}
          <div className="mb-4 flex flex-col gap-2 border-b border-[#dceaf3] pb-4 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b63ad]">
                <span className="h-[2px] w-6 bg-[#8bc349]" />
                Learner Voices
              </div>

              <h2 className="mt-1.5 text-2xl font-bold leading-tight text-[#092f4f] sm:text-3xl lg:text-[34px]">
                What Our Learners{" "}
                <span className="text-[#0b63ad]">Say About Us</span>
              </h2>
            </div>

            <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-sm">
              Real experiences from learners building practical skills for their
              future careers.
            </p>
          </div>

          {/* Testimonial */}
          <div className="grid items-center gap-5 border-b border-[#dceaf3] py-5 sm:gap-7 sm:py-6 md:grid-cols-[210px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm sm:h-14 sm:w-14"
                />

                <span className="absolute -bottom-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-[#f5faff] bg-[#8bc349] text-[8px] font-bold text-white">
                  ✓
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-tight text-[#092f4f]">
                  {testimonials[activeTestimonial].name}
                </h3>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  {testimonials[activeTestimonial].role}
                </p>

                <p className="text-[10px] text-slate-400">
                  {testimonials[activeTestimonial].location}
                </p>

                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[10px] tracking-wide text-[#f5b301]">
                    ★★★★★
                  </span>

                  <span className="text-[10px] font-semibold text-slate-500">
                    {testimonials[activeTestimonial].rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Review */}
            <div className="relative border-l-2 border-[#8bc349] pl-5 sm:pl-6 lg:pl-8">
              <span className="absolute -left-[2px] -top-4 bg-[#f5faff] px-1 font-serif text-3xl leading-none text-[#0b63ad]">
                “
              </span>

              <p className="max-w-4xl text-[17px] font-medium leading-7 text-[#092f4f] sm:text-[20px] sm:leading-8 lg:text-[24px] lg:leading-[1.5]">
                {testimonials[activeTestimonial].testimonial}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial - 1 + testimonials.length) %
                    testimonials.length,
                )
              }
              aria-label="Previous testimonial"
              className="grid h-7 w-7 place-items-center border border-[#cbdde8] bg-white text-xs text-[#0b63ad] transition hover:border-[#0b63ad] hover:bg-[#0b63ad] hover:text-white"
            >
              ←
            </button>

            <div className="flex items-center gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-200 ${
                    index === activeTestimonial
                      ? "w-6 bg-[#0b63ad]"
                      : "w-2.5 bg-[#c9dce8] hover:bg-[#8bc349]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveTestimonial(
                  (activeTestimonial + 1) % testimonials.length,
                )
              }
              aria-label="Next testimonial"
              className="grid h-7 w-7 place-items-center border border-[#cbdde8] bg-white text-xs text-[#0b63ad] transition hover:border-[#0b63ad] hover:bg-[#0b63ad] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-7 sm:py-9 lg:py-10">
        <div className="container-shell relative">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
            {/* LEFT SECTION */}

            <div className="lg:sticky lg:top-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#8bc349]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b63ad]">
                  FAQs
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-[1.15] text-[#092f4f] sm:text-4xl lg:text-[42px]">
                Everything You
                <br />
                <span className="text-[#0b63ad]">Need To Know.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
                Have questions about our courses, training process or learning
                programs? We have answered some of the most common questions to
                help you get started with confidence.
              </p>

              {/* Creative info block */}

              <div className="mt-5 border-l-4 border-[#8bc349] bg-[#f5faff] px-5 py-4">
                <p className="text-sm font-semibold text-[#092f4f]">
                  Can't find what you're looking for?
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Our team can help you choose the right learning path.
                </p>

                <a
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#0b63ad] transition-all hover:text-[#8bc349]"
                >
                  Talk to our team
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Decorative learning mark */}

              <div className="mt-5 hidden items-center gap-3 lg:flex">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full border-2 border-white bg-[#0b63ad]" />
                  <span className="h-8 w-8 rounded-full border-2 border-white bg-[#8bc349]" />
                  <span className="h-8 w-8 rounded-full border-2 border-white bg-[#092f4f]" />
                </div>

                <span className="text-xs font-medium text-slate-500">
                  Helping learners move forward
                </span>
              </div>
            </div>

            {/* RIGHT SECTION */}

            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Common Questions
                </span>

                <span className="text-xs font-bold text-[#8bc349]">
                  {String(faqs.length).padStart(2, "0")} Answers
                </span>
              </div>

              <div className="border-t border-[#dceaf3]">
                {faqs.map(([question, answer], index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={question}
                      className={`border-b border-[#dceaf3] transition-all duration-300 ${
                        isOpen ? "bg-[#f7fbfe]" : "bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="focus-ring group flex w-full items-center gap-4 px-2 py-4 text-left sm:px-3 sm:py-5"
                      >
                        {/* Number */}

                        <span
                          className={`w-9 shrink-0 text-xs font-bold transition-colors duration-300 ${
                            isOpen
                              ? "text-[#8bc349]"
                              : "text-slate-300 group-hover:text-[#0b63ad]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}

                        <span
                          className={`flex-1 font-display text-sm font-semibold leading-6 transition-colors sm:text-base lg:text-[17px] ${
                            isOpen
                              ? "text-[#0b63ad]"
                              : "text-[#092f4f] group-hover:text-[#0b63ad]"
                          }`}
                        >
                          {question}
                        </span>

                        {/* Creative icon */}

                        <span
                          className={`relative flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#0b63ad] text-white"
                              : "bg-[#f1f7fa] text-[#092f4f] group-hover:bg-[#8bc349] group-hover:text-white"
                          }`}
                        >
                          <FiChevronDown
                            className={`text-base transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      {/* Answer */}

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-4 pl-[3.25rem] pr-8 sm:pl-[3.5rem]">
                            <div className="relative border-l-2 border-[#8bc349] pl-4">
                              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                                {answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryCTA compact />
    </div>
  );
}