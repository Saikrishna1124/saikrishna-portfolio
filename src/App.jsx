import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowUpRight,
  Download,
  Send,
  ExternalLink,
  Menu,
  X,
  Mail,
  Check,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Loader2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const USER_INFO = {
  name: "Sai Krishna Gummadidala",
  shortName: "Sai Krishna",
  role: "Full-Stack Developer | AI/ML Engineer",
  email: "saikrishnagummadidala34@gmail.com",
  phone: "+91 7013868178",
  location: "Guntur, Andhra Pradesh",
  github: "https://github.com/Saikrishna1124",
  linkedin: "https://www.linkedin.com/in/sai-krishna-gummadidala-261984354/",
  resume: "/sai_resume.pdf",
  web3formsKey: "c57a6561-c89f-4387-b409-513d04ae42db",
};

const skills = [
  { name: "Python & Django", category: "Languages & Frameworks", level: "Advanced" },
  { name: "React & TypeScript", category: "Frontend", level: "Advanced" },
  { name: "Node.js & Express", category: "Backend", level: "Advanced" },
  { name: "Google Gemini API", category: "AI & ML", level: "Advanced" },
  { name: "PostgreSQL & MySQL", category: "Databases", level: "Advanced" },
  { name: "MongoDB & Firebase", category: "Databases", level: "Proficient" },
  { name: "Tailwind CSS & GSAP", category: "Frontend", level: "Advanced" },
  { name: "REST APIs & Auth", category: "Backend", level: "Advanced" },
  { name: "AWS & Vercel / Render", category: "DevOps & Cloud", level: "Proficient" },
  { name: "DSA & OOP Concepts", category: "Core CS", level: "Advanced" },
];

const projects = [
  {
    title: "CareerMap -- AI Guidance Platform",
    subtitle: "Flagship Project",
    description:
      "AI-powered career platform that analyzes resumes, identifies skill gaps, generates personalized roadmaps via Gemini API, and visualizes insights.",
    tags: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Gemini AI",
      "Recharts",
    ],
    githubUrl: "https://github.com/Saikrishna1124/CareerMap",
    liveUrl: "https://careermap-c2vx.onrender.com/",
  },
  {
    title: "NexusLearn -- Smart E-Learning",
    subtitle: "Full-Stack AI Platform",
    description:
      "Full-stack e-learning platform with JWT authentication, real-time Firebase sync for 100+ resources, Gemini AI recommendations, and interactive 3D elements.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Gemini AI"],
    githubUrl: "https://github.com/Saikrishna1124/NexusLearn",
    liveUrl: "https://nexus-learn-lyart.vercel.app/",
  },
  {
    title: "CampusPro -- College Management",
    subtitle: "Enterprise System",
    description:
      "College management system featuring secure authentication, attendance tracking, student records, and academic workflows with Django ORM relational schema.",
    tags: ["Django", "Python", "MySQL", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Saikrishna1124/CampusPro",
    liveUrl:
      "https://campus-pro-zfrb-jsklfghsq-saikrishna1124s-projects.vercel.app/",
  },
];

const experiences = [
  {
    title: "Python Developer Intern",
    company: "Elevate Labs",
    period: "Sep 2025 -- Nov 2025",
    award: "Best Performer Award",
    description:
      "Engineered high-performance backend APIs and data processing workflows, delivering measurable response time improvements and zero-downtime reliability ahead of release deadlines.",
    bullets: [
      "Built and optimized 5+ production REST API endpoints in Python, reducing API response times by 25% through database query optimization.",
      "Identified and resolved critical backend reliability issues ahead of tight production release deadlines.",
      "Collaborated with senior software engineers to write unit test suites and streamline backend API integration.",
    ],
    highlights: ["Python", "REST APIs", "Query Optimization", "Testing", "Django", "PostgreSQL"],
  },
];

const education = [
  {
    degree: "B.Tech -- CSE (AI & ML)",
    institution: "Parul University, Vadodara",
    period: "2023 -- 2027",
    score: "CGPA: 8.12",
    description:
      "Specializing in Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management, and Full-Stack Engineering.",
  },
  {
    degree: "Intermediate -- MPC",
    institution: "Sri Chaitanya College, Guntur",
    period: "2021 -- 2023",
    score: "93.9%",
    description: "Mathematics, Physics, and Chemistry core coursework.",
  },
];

const certifications = [
  {
    name: "Best Performer Award",
    issuer: "Elevate Labs",
    link: "https://drive.google.com/file/d/1X8oft_aRl5cBs3hmkHmy7-f2qKxqVHML/view?usp=sharing",
  },
  {
    name: "AWS Academy Graduate",
    issuer: "AWS Academy",
    link: "https://drive.google.com/file/d/19KU2JP--vHTSRRRsOSGjwKcnrnpEcg0z/view?usp=sharing",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/10Bsm0t5AJYcDeUDcfg-SEsxk2FFEFg8M/view?usp=sharing",
  },
  {
    name: "Data Science",
    issuer: "Certification Program",
    link: "https://drive.google.com/file/d/1pVM_xqlKjgAxRreWuMZDmxV75y52HWg2/view?usp=sharing",
  },
  {
    name: "Mastering DSA",
    issuer: "Algorithms Certification",
    link: "https://drive.google.com/file/d/1c9_Haq1vhq11KhCyYdFVkhtQLmq6MgLg/view?usp=sharing",
  },
  {
    name: "Generative AI for All",
    issuer: "AI Specialization",
    link: "https://drive.google.com/file/d/1-pKfCTjm7mTXxdV-yPmZq-HzARzWKv42/view?usp=sharing",
  },
];

const marqueeItems = [
  "FULL-STACK DEVELOPER",
  "AI & ML ENGINEER",
  "PYTHON & REACT.JS",
  "DJANGO & NODE.JS",
  "POSTGRESQL & GEMINI AI",
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-expo",
    });
  }, []);

  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Certifications />
      <Contact />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-white text-xl sm:text-2xl font-black tracking-tighter italic uppercase group flex items-center shrink-0"
        >
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
            S
          </span>
          <span className="group-hover:text-red-500 transition-colors duration-300">
            AI KRISHNA.
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-red-600 transition-colors p-2 rounded-lg focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-red-900/50 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-gray-200 uppercase tracking-widest hover:text-red-500 transition-colors py-1.5 border-b border-gray-800/60"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center pt-2">
            <a
              href={USER_INFO.resume}
              download="Sai_Krishna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#a31515] px-4 py-2 rounded-lg hover:bg-[#7a0f0f] transition-all w-full justify-center"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const containerRef = useRef(null);
  const topMaskRef = useRef(null);
  const webTopBottomRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  const maskCoords = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 500,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 500,
    alpha: 1,
    size: 50,
  }).current;

  const quickX = useRef(null);
  const quickY = useRef(null);
  const marqueeTween1 = useRef(null);
  const marqueeTween2 = useRef(null);
  const marqueeTrackRef = useRef(null);
  const marqueeTrack2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "back.out(1.7)" } })
        .fromTo(
          webTopBottomRef.current ? webTopBottomRef.current.children : [],
          { opacity: 0, scale: 0.5 },
          {
            opacity: 0.5,
            scale: 1,
            duration: 2,
            stagger: 0.4,
            ease: "power3.out",
          }
        )
        .fromTo(
          eyebrowRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2 },
          "-=1.5"
        )
        .fromTo(
          titleRef.current,
          { x: -150, opacity: 0, skewX: -15 },
          { x: 0, opacity: 1, skewX: 0, duration: 1.2 },
          "-=1.0"
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          buttonsRef.current ? buttonsRef.current.children : [],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.6"
        );

      if (webTopBottomRef.current) {
        gsap.to(webTopBottomRef.current.children, {
          rotation: 360,
          duration: 120,
          repeat: -1,
          ease: "linear",
        });
        gsap.to(webTopBottomRef.current.children, {
          scale: 1.1,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      if (marqueeTrackRef.current) {
        marqueeTween1.current = gsap.to(marqueeTrackRef.current, {
          x: "-50%",
          repeat: -1,
          duration: 15,
          ease: "none",
        });
      }

      if (marqueeTrack2Ref.current) {
        gsap.set(marqueeTrack2Ref.current, { x: "-50%" });
        marqueeTween2.current = gsap.to(marqueeTrack2Ref.current, {
          x: "0%",
          repeat: -1,
          duration: 20,
          ease: "none",
        });
      }

      gsap.to(".marquee-text", {
        y: -4,
        yoyo: true,
        repeat: -1,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    quickX.current = gsap.quickTo(maskCoords, "x", {
      duration: 0.3,
      ease: "power4.out",
    });
    quickY.current = gsap.quickTo(maskCoords, "y", {
      duration: 0.3,
      ease: "power4.out",
    });

    const updateMask = () => {
      if (topMaskRef.current) {
        const { x, y, alpha, size } = maskCoords;
        const maskVal = `radial-gradient(circle ${size}px at ${x}px ${y}px, rgba(0,0,0,${alpha}) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,1) 100%)`;
        topMaskRef.current.style.webkitMaskImage = maskVal;
        topMaskRef.current.style.maskImage = maskVal;
      }
    };

    gsap.ticker.add(updateMask);
    return () => gsap.ticker.remove(updateMask);
  }, [maskCoords]);

  const handleMouseMove = (e) => {
    if (quickX.current && quickY.current) {
      quickX.current(e.clientX);
      quickY.current(e.clientY);
    }
  };

  const handleMouseEnter = () => {
    gsap.to(maskCoords, {
      alpha: 0,
      size: 700,
      duration: 0.8,
      ease: "elastic.out(1, 0.7)",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(maskCoords, {
      alpha: 1,
      size: 50,
      duration: 1.2,
      ease: "power4.inOut",
      overwrite: "auto",
    });
  };

  const handleMarqueeMouseEnter = () => {
    if (marqueeTween1.current && marqueeTween2.current) {
      gsap.to([marqueeTween1.current, marqueeTween2.current], {
        timeScale: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const handleMarqueeMouseLeave = () => {
    if (marqueeTween1.current && marqueeTween2.current) {
      gsap.to([marqueeTween1.current, marqueeTween2.current], {
        timeScale: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const renderMarqueeContent = (items) => (
    <>
      {[0, 1, 2].map((groupIndex) => (
        <div key={groupIndex} className="flex items-center h-full shrink-0">
          {items.map((item, idx) => (
            <div key={`${groupIndex}-${idx}`} className="flex items-center">
              <span className="marquee-text mx-4 md:mx-6 text-xs sm:text-sm md:text-base lg:text-xl font-black uppercase italic tracking-widest whitespace-nowrap shrink-0 drop-shadow-sm">
                {item}
              </span>
              <img
                src={
                  idx % 2 === 0
                    ? "/assets/spydy-DLbFrGCQ.png"
                    : "/assets/web1-770H2sSx.png"
                }
                alt="Separator"
                className="mx-3 md:mx-6 h-4 sm:h-6 w-auto object-cover shrink-0 drop-shadow-md"
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <main className="w-full flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair px-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Bottom Identity Layer */}
        <img
          src="/assets/image-2-DS0sMyr7.png"
          alt="Bottom Identity Layer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-10"
        />

        {/* Top Mask Layer */}
        <img
          ref={topMaskRef}
          src="/assets/image-1-fYP2o7gg.png"
          alt="Top Mask Layer"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-20"
          style={{ WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat" }}
        />

        {/* Spider Web Layer */}
        <div
          ref={webTopBottomRef}
          className="absolute inset-0 pointer-events-none z-[25] overflow-hidden"
        >
          <img
            src="/assets/web1-770H2sSx.png"
            alt="Spider Web Top"
            className="absolute top-0 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] object-contain opacity-50 -translate-x-1/4 -translate-y-1/4 mix-blend-multiply"
          />
          <img
            src="/assets/web1-770H2sSx.png"
            alt="Spider Web Bottom"
            className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] object-contain opacity-50 translate-x-1/4 translate-y-1/4 mix-blend-multiply"
          />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-4 sm:left-8 md:left-12 lg:left-16 z-30 flex flex-col gap-2 sm:gap-2.5 pointer-events-none drop-shadow-md max-w-lg w-full">
          <span
            ref={eyebrowRef}
            className="text-[#a31515] font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.2em] opacity-0"
          >
            Your Friendly Neighborhood Engineer
          </span>

          <h1
            ref={titleRef}
            className="text-gray-900 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none opacity-0 italic uppercase"
            style={{ textShadow: "3px 3px 0px #ef4444, 6px 6px 0px #a31515" }}
          >
            SAI
            <br />
            KRISHNA.
          </h1>

          <div ref={subtitleRef} className="opacity-0">
            <p className="text-gray-900 font-extrabold text-xs sm:text-sm md:text-base tracking-widest uppercase bg-white/85 backdrop-blur-sm px-3.5 py-1.5 rounded-md inline-block border border-gray-200 shadow-sm">
              {USER_INFO.role}
            </p>
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-6 pointer-events-auto"
          >
            <a
              href="#projects"
              className="relative overflow-hidden bg-[#a31515] hover:bg-[#7a0f0f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,21,21,0.4)] cursor-pointer uppercase border border-[#a31515]"
            >
              Explore Projects
            </a>

            <a
              href={USER_INFO.resume}
              download="Sai_Krishna_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-gray-900 hover:bg-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] uppercase text-xs sm:text-sm group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
              Resume
            </a>

            <div className="flex items-center gap-2.5 sm:ml-2">
              <a
                href={USER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-900/90 hover:bg-black text-white rounded-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
              </a>

              <a
                href={USER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-900/90 hover:bg-black text-white rounded-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />
              </a>

              <a
                href={USER_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gray-900/90 hover:bg-black text-white rounded-lg transition-all duration-300 hover:-translate-y-1 border border-gray-800"
                title="LeetCode Profile"
              >
                <Code2 className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <section
        className="relative w-full h-[18vh] sm:h-[20vh] md:h-[30vh] bg-white overflow-hidden flex items-center justify-center z-40"
        onMouseEnter={handleMarqueeMouseEnter}
        onMouseLeave={handleMarqueeMouseLeave}
      >
        <div className="absolute w-[110vw] h-10 sm:h-12 md:h-16 lg:h-20 bg-[#a31515] text-white border-y-[3px] border-black rotate-[4deg] -translate-y-3 sm:-translate-y-4 md:-translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-20 flex items-center overflow-hidden scale-105">
          <div ref={marqueeTrackRef} className="flex items-center h-full w-max">
            {renderMarqueeContent(marqueeItems)}
          </div>
        </div>

        <div className="absolute w-[110vw] h-10 sm:h-12 md:h-16 lg:h-20 bg-[#111111] text-[#a31515] border-y-[3px] border-black rotate-[-4deg] translate-y-3 sm:translate-y-4 md:translate-y-6 shadow-[0_10px_20px_rgba(0,0,0,0.4)] z-10 flex items-center overflow-hidden scale-105">
          <div
            ref={marqueeTrack2Ref}
            className="flex items-center h-full w-max"
          >
            {renderMarqueeContent(marqueeItems)}
          </div>
        </div>
      </section>
    </main>
  );
}

function About() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          eyebrowRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          bioRef.current ? bioRef.current.children : [],
          { y: 20, opacity: 0, rotateX: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          techRef.current ? techRef.current.children : [],
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        )
        .fromTo(
          avatarRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "bounce.out" },
          "-=0.8"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-50 text-gray-900 py-16 sm:py-24 flex items-center justify-center overflow-hidden border-t border-gray-100 px-4"
    >
      {/* Background Hanging Webs */}
      <div className="absolute top-[-50px] left-[-10%] sm:left-[2%] flex flex-col items-center pointer-events-none z-0">
        <div className="w-[1px] h-[180px] sm:h-[350px] bg-gradient-to-b from-transparent to-gray-300" />
        <img
          src="/assets/web1-770H2sSx.png"
          alt="Hanging Web"
          className="w-48 sm:w-96 h-48 sm:h-96 object-contain -mt-10 sm:-mt-12 opacity-[0.10] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-2 sm:px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-20 z-10 relative">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 mt-6 lg:mt-0 relative z-20 w-full">
          <div className="overflow-hidden">
            <span
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 text-[#a31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]"
            >
              <img
                src="/assets/spydy-DLbFrGCQ.png"
                alt="Spider"
                className="w-4 sm:w-5 h-4 sm:h-5 object-contain drop-shadow-sm"
              />
              Behind the Mask
            </span>
          </div>

          <div className="overflow-hidden py-1">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-gray-900"
              style={{ textShadow: "2px 2px 0px #fca5a5" }}
            >
              Sai Krishna.
            </h2>
          </div>

          <div
            ref={bioRef}
            className="flex flex-col gap-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium mt-1"
            style={{ perspective: "1000px" }}
          >
            <p className="origin-bottom">
              I'm Sai Krishna Gummadidala, a B.Tech CSE (AI & ML) student at Parul University
              with hands-on experience designing, developing, and deploying full-stack web applications
              using React, Django, Node.js, and Python.
            </p>
            <p className="origin-bottom">
              Recognized as <strong>Best Performer</strong> during my Python Developer Internship at Elevate Labs,
              I specialize in building optimized REST APIs, integrating AI services like Gemini, and engineering responsive user interfaces.
            </p>
          </div>

          <div className="mt-4 sm:mt-6">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 sm:mb-6 font-bold border-b border-gray-300 pb-2 inline-block">
              Primary Tech Stack
            </h3>
            <div ref={techRef} className="flex flex-wrap gap-2.5 sm:gap-3">
              {[
                "Python",
                "React.js",
                "TypeScript",
                "Django",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MySQL",
                "Gemini AI",
                "Tailwind CSS",
              ].map((tech) => (
                <div
                  key={tech}
                  className="tech-pill px-3.5 sm:px-5 py-2 sm:py-2.5 border border-[#a31515]/30 bg-white text-[#a31515] rounded-xl text-xs sm:text-sm font-bold tracking-wider hover:bg-[#a31515] hover:text-white hover:border-[#a31515] shadow-sm transition-colors duration-300 cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Avatar Frame */}
        <div className="flex-1 relative flex justify-center items-start min-h-[320px] sm:min-h-[450px] w-full pt-0">
          <div ref={avatarRef} className="flex flex-col items-center z-30 group">
            <div className="w-[2px] h-[120px] sm:h-[250px] md:h-[350px] bg-gradient-to-b from-transparent via-[#a31515]/60 to-[#a31515]" />
            <div className="glow-frame relative w-48 h-48 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] rounded-full border-[5px] sm:border-[6px] border-[#a31515] p-2 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/mypic-a3-nZ6gT.png"
                alt="Sai Krishna Profile"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bgWebRef = useRef(null);
  const hangingSpiderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".matrix-item",
          { y: 30, opacity: 0, x: -15 },
          {
            y: 0,
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );

      gsap.to(bgWebRef.current, {
        scale: 1.05,
        opacity: 0.06,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });

      gsap.to(hangingSpiderRef.current, {
        rotation: 5,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Web */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[450px] sm:w-[600px] md:w-[800px] h-[450px] sm:h-[600px] md:h-[800px] object-contain opacity-[0.04] mix-blend-multiply"
        />
      </div>

      {/* Hanging Spider-Man */}
      <div
        ref={hangingSpiderRef}
        className="absolute top-0 right-4 sm:right-12 md:right-16 z-30 pointer-events-none flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-12 sm:h-20 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img
          src="/assets/spydy_hang-Cac1gK30.png"
          alt="Hanging Spider-Man"
          className="w-20 sm:w-28 md:w-40 h-auto object-contain drop-shadow-lg -mt-2"
        />
      </div>

      {/* Header */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-10 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Arsenal & Expertise
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          TECHNICAL SKILLS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Skills Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 z-10">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="matrix-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-300 flex items-center justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_8px_20px_rgba(163,21,21,0.15)] transform hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out z-0" />
            <div className="relative z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a31515] group-hover:bg-white transition-colors duration-300 shadow-[0_0_8px_rgba(163,21,21,0.6)]" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 group-hover:text-gray-200 transition-colors duration-300 uppercase tracking-widest">
                  {skill.category}
                </span>
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 bg-white text-gray-700 group-hover:bg-black group-hover:text-white rounded-full transition-colors duration-300 shadow-sm">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bgWebRef = useRef(null);
  const standingSpiderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".project-item",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        )
        .fromTo(
          standingSpiderRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.4"
        );

      if (bgWebRef.current) {
        gsap.set(bgWebRef.current, { transformOrigin: "top right" });
        gsap.to(bgWebRef.current, {
          rotation: 8,
          repeat: -1,
          yoyo: true,
          duration: 6,
          ease: "sine.inOut",
        });
        gsap.to(bgWebRef.current, {
          scale: 1.1,
          opacity: 0.07,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "sine.inOut",
        });
      }

      gsap.to(standingSpiderRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLink = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Web Top Right */}
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply translate-x-1/4 -translate-y-1/4"
        />
      </div>

      {/* Standing Spider-Man Bottom Left */}
      <div
        ref={standingSpiderRef}
        className="absolute bottom-0 left-2 sm:left-8 md:left-12 z-30 pointer-events-none"
      >
        <img
          src="/assets/spydy_stand-BwBM-zCr.png"
          alt="Standing Spider-Man"
          className="w-24 sm:w-32 md:w-48 h-auto object-contain drop-shadow-2xl opacity-90"
        />
      </div>

      {/* Title */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-10 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Featured Works
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          PROJECTS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 z-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => openLink(project.liveUrl || project.githubUrl)}
            className="project-item group relative bg-gray-50/90 backdrop-blur-sm border border-gray-200 hover:border-[#a31515] p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_10px_25px_rgba(163,21,21,0.15)] transform hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#a31515] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#a31515] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  {project.subtitle}
                </span>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#a31515] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0 ml-2" />
              </div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-gray-900 group-hover:text-[#a31515] transition-colors duration-300 mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium mb-5">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-gray-200/60">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 bg-white border border-gray-200 text-gray-600 group-hover:border-[#a31515]/30 group-hover:text-[#a31515] rounded-md transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-3 pt-1">
                {project.githubUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.githubUrl);
                    }}
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-700 hover:text-[#a31515] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 fill-current" />
                    Code
                  </button>
                )}

                {project.liveUrl && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLink(project.liveUrl);
                    }}
                    className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-700 hover:text-[#a31515] transition-colors ml-auto"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceEducation() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".timeline-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-gray-50 text-gray-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >

      {/* Title */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-12 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Career Path
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          EXPERIENCE & EDUCATION.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 z-10 items-stretch">
        {/* Experience Column */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
            <Briefcase className="w-5 h-5 text-[#a31515]" />
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">
              Work Experience
            </h3>
          </div>

          <div className="flex flex-col gap-4 h-full flex-1">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="timeline-card bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:border-[#a31515] transition-all duration-300 hover:shadow-md h-full flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 uppercase tracking-tight">
                        {exp.title}
                      </h4>
                      <p className="text-xs font-bold text-[#a31515] uppercase tracking-wider">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full shrink-0 ml-2">
                      {exp.period}
                    </span>
                  </div>
                  {exp.award && (
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#a31515] bg-red-50 border border-red-200 px-2.5 py-1 rounded-md mb-3">
                      <Award className="w-3.5 h-3.5" />
                      {exp.award}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {exp.bullets && (
                    <ul className="space-y-2 mb-4 text-xs text-gray-600 font-medium">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a31515] mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {exp.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
            <GraduationCap className="w-5 h-5 text-[#a31515]" />
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">
              Education
            </h3>
          </div>

          <div className="flex flex-col gap-4 h-full flex-1">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="timeline-card bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:border-[#a31515] transition-all duration-300 hover:shadow-md flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-bold text-gray-900 uppercase tracking-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a31515] bg-red-50 border border-red-100 px-2.5 py-1 rounded-full shrink-0 ml-2">
                      {edu.period}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-gray-800 bg-gray-100 px-2.5 py-0.5 rounded mb-3">
                    {edu.score}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".cert-card",
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(1.5)",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Title */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-10 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
          Qualifications & Badges
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          CERTIFICATIONS.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card bg-gray-50/90 border border-gray-200 p-4 rounded-xl hover:border-[#a31515] hover:bg-white transition-all duration-300 flex items-center justify-between group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#a31515] group-hover:bg-[#a31515] group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#a31515] transition-colors">
                  {cert.name}
                </span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  {cert.issuer}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#a31515] transition-colors shrink-0 ml-2" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bgWebRef = useRef(null);
  const formRef = useRef(null);
  const hangingSpiderRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          formRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.3"
        );

      gsap.to(bgWebRef.current, {
        scale: 1.15,
        opacity: 0.06,
        repeat: -1,
        yoyo: true,
        duration: 4.5,
        ease: "sine.inOut",
      });

      gsap.to(hangingSpiderRef.current, {
        rotation: 8,
        transformOrigin: "top center",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: USER_INFO.web3formsKey || "YOUR_WEB3FORMS_KEY",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: `${formData.name} via Portfolio`,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setSubmitted(true);
      } else {
        // Fallback to mailto if key is not active
        window.location.href = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(
          "Portfolio Inquiry from " + formData.name
        )}&body=${encodeURIComponent(
          "Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message
        )}`;
        setSubmitted(true);
      }
    } catch (err) {
      window.location.href = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(
        "Portfolio Inquiry from " + formData.name
      )}&body=${encodeURIComponent(
        "Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-white text-gray-900 py-16 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden border-t border-gray-100"
    >
      {/* Background Web Bottom Left */}
      <div className="absolute bottom-0 left-0 pointer-events-none overflow-hidden z-0">
        <img
          ref={bgWebRef}
          src="/assets/web1-770H2sSx.png"
          alt="Background Web"
          className="w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] object-contain opacity-[0.04] mix-blend-multiply -translate-x-1/4 translate-y-1/4"
        />
      </div>

      {/* Hanging Spider-Man Top Right */}
      <div
        ref={hangingSpiderRef}
        className="absolute top-0 right-4 sm:right-12 md:right-20 z-30 pointer-events-none flex flex-col items-center origin-top"
      >
        <div className="w-[2px] h-16 sm:h-24 md:h-36 bg-gradient-to-b from-transparent to-gray-400 opacity-60" />
        <img
          src="/assets/spydy_hang-Cac1gK30.png"
          alt="Hanging Spider-Man"
          className="w-24 sm:w-40 md:w-60 h-auto object-contain drop-shadow-2xl -mt-2"
        />
      </div>

      {/* Title */}
      <div
        ref={titleRef}
        className="flex flex-col items-center text-center mb-10 z-10"
      >
        <span className="text-[#a31515] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2 flex items-center gap-1.5">
          <img
            src="/assets/spydy-DLbFrGCQ.png"
            alt="Spider"
            className="w-4 h-4 object-contain"
          />
          Get In Touch
        </span>
        <h2
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-gray-900"
          style={{ textShadow: "2px 2px 0px #fca5a5" }}
        >
          CONTACT.
        </h2>
        <div className="w-12 h-1 bg-[#a31515] mt-2 rounded-full" />
      </div>

      {/* Form Card */}
      <div
        ref={formRef}
        className="w-full max-w-2xl bg-gray-50/90 backdrop-blur-sm border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm relative z-10"
      >
        {submitted ? (
          <div className="py-10 sm:py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
            <div className="w-14 h-14 bg-[#a31515] text-white rounded-full flex items-center justify-center text-2xl font-black mb-4 shadow-lg animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">
              Message Delivered!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-md mb-6 leading-relaxed">
              Thank you for reaching out, {formData.name || "friend"}. Your message has been sent directly to Sai Krishna. You'll receive a response shortly!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="text-xs font-bold uppercase tracking-widest text-[#a31515] hover:text-[#7a0f0f] border border-[#a31515]/30 px-6 py-2.5 rounded-xl hover:bg-[#a31515]/5 transition-all"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Peter Parker"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="peter@stark.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                Message
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let's build something amazing together..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#a31515] focus:ring-1 focus:ring-[#a31515] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#a31515] hover:bg-[#7a0f0f] text-white py-3.5 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 shadow-[0_4px_15px_rgba(163,21,21,0.3)] hover:shadow-[0_6px_20px_rgba(163,21,21,0.5)] cursor-pointer mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-gray-200/80">
          <a
            href={`mailto:${USER_INFO.email}`}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#a31515] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#a31515]" />
            {USER_INFO.email}
          </a>

          <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />

          <a
            href={USER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#a31515] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4 fill-current" />
          </a>

          <a
            href={USER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#a31515] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 fill-current" />
          </a>

          <a
            href={USER_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#a31515] transition-colors"
            title="LeetCode"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

export default App;