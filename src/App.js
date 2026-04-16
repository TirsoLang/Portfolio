import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // 
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import LipaAlertHub from "./assets/LipaAlertHub.png";
import LipaAlertHubPDF from "./assets/LipaAlertHub.pdf";
import Resume from "./assets/Resume.pdf";
import CulturaImg from "./assets/Cultura1x1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "> Initializing Portfolio...";

  useEffect(() => {
    AOS.init({ duration: 1000 });

    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);

    setTimeout(() => setLoading(false), 2200);

    return () => clearInterval(interval);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>{text} |</h2>
      </div>
    );
  }

  return (
    <div className="main-container">

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles"
      />

      <div className="content">

        <nav className="navbar navbar-dark bg-dark px-4 sticky-top">
          <div className="d-flex align-items-center">
            <img
              src={CulturaImg}
              alt="Profile"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px"
              }}
            />

            <span className="navbar-brand text-info fw-bold mb-0">
              Julian Dane C. Cultura
            </span>
          </div>
          <div>
            <button
              className="btn btn-outline-info me-2"
              onClick={() => window.open(Resume, "_blank")}
            >
              Open Resume
            </button>
            <a href="#profile" className="btn btn-outline-info me-2">Profile</a>
            <a href="#achievements" className="btn btn-outline-info me-2">Achievements</a>
            <a href="#skills" className="btn btn-outline-info me-2">Skills</a>
            <a href="#projects" className="btn btn-outline-info">Projects</a>
          </div>
        </nav>

        <section className="text-center py-5">
          <motion.h1 className="text-info"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}>
            Julian Dane C. Cultura
          </motion.h1>

          <motion.p className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            BS Information Technology • Future Developer
          </motion.p>
        </section>

        {/* PROFILE */}
        <section id="profile" className="container py-5" data-aos="fade-right">
          <h2 className="text-info text-center mb-4">Profile</h2>

          <div
            className="card custom-card text-light p-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h4 className="mb-3">👋 Hi, I'm Julian Dane C. Cultura</h4>

            <p>
              I am a Bachelor of Science in Information Technology student with a strong
              passion for software development, technology, and continuous learning.
              I enjoy building modern, user-friendly applications that solve real-world
              problems and improve digital experiences.
            </p>

            <p>
              I have experience working with programming languages such as C#, Java,
              and web technologies including HTML, CSS, JavaScript, and React. I am
              particularly interested in front-end development, UI/UX design, and
              creating responsive and interactive web applications.
            </p>

            <p>
              Currently, I am expanding my knowledge by learning automated testing using
              Cypress, allowing me to build more reliable and high-quality applications.
              I am also gaining exposure to SAP systems, exploring how enterprise
              software supports business processes, data management, and large-scale
              operations.
            </p>

            <p>
              I am a motivated and detail-oriented individual who is always eager to
              learn new technologies, adapt to new environments, and continuously
              improve my skills as a developer.
            </p>

            <p>
              My goal is to become a professional software developer and contribute
              to innovative, efficient, and impactful technology solutions.
            </p>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="container py-5" data-aos="zoom-in">
          <h2 className="text-info text-center mb-4">Achievements</h2>
          <div className="row g-3">
            {["2nd Place – Best in Implementation", "3rd Place – Best in Communication", "STI College Lipa (2022–2026)"].map((text, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card custom-card text-center"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <h5>{i === 2 ? "🎓 Education" : "🥈 College Fair"}</h5>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="container py-5" data-aos="fade-up">
          <h2 className="text-info text-center mb-4">Skills</h2>
          <Skill name="C#" level={85} />
          <Skill name="Java" level={80} />
          <Skill name="Web (HTML, CSS, JS, React)" level={90} />
          <Skill name="Testing (Manual, Cypress)" level={75} />
          <Skill name="SQL, PHP, UI/UX" level={75} />
          <Skill name="SAP" level={50} />
        </section>


        {/* PROJECT */}
        <section id="projects" className="container py-5" data-aos="zoom-in-up">
          <h2 className="text-info text-center mb-5">Capstone</h2>

          {/* IMAGE SECTION */}
          <div className="text-center mb-4">
            <img
              src={LipaAlertHub}
              className="img-fluid"
              style={{ borderRadius: "15px", maxHeight: "300px" }}
              alt="LipaAlertHub"
            />
          </div>

          {/* TITLE */}
          <h3 className="text-info text-center mb-3">LipaAlertHub</h3>

          {/* DESCRIPTION */}
          <div className="card custom-card p-4 text-light">
            <p>
              <strong>LipaAlertHub</strong> is a mobile-based incident reporting and
              public awareness system designed to enhance safety in Lipa City.
              It allows users to quickly report emergencies and receive real-time updates.
            </p>

            <p>
              The system improves communication between citizens and local authorities,
              helping reduce response time and increase public awareness during critical situations.
            </p>

            <p>
              Key features include real-time alerts, location-based reporting, and
              a user-friendly interface that ensures accessibility for all users.
            </p>

            <div className="text-center">
              <button className="btn btn-info mt-2"
                onClick={() => window.open(LipaAlertHubPDF, "_blank")}>
                View Project</button>
            </div>
          </div>
        </section>


        {/* COUNTERS */}
        <section className="container py-5 text-center" data-aos="fade-up">
          <h2 className="text-info mb-4">Stats</h2>
          <div className="row">
            <div className="col-md-4"><Counter label="Projects" target={5} /></div>
            <div className="col-md-4"><Counter label="Technologies" target={10} /></div>
            <div className="col-md-4"><Counter label="Achievements" target={3} /></div>
          </div>
        </section>

        <footer className="text-center p-3 bg-dark">
          <p>© 2026 Julian Dane C. Cultura</p>
        </footer>
        {/* FLOATING MENU */}
        <div className="fab-container">
          <button
            className={`fab-main ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            +
          </button>

          <div className={`fab-menu ${menuOpen ? "show" : ""}`}>
            <button
              className="fab-item fab1"
              onClick={() => window.open("https://www.facebook.com/jd.cultura")}
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              className="fab-item fab2"
              onClick={() => window.open("https://x.com/jdcultura?s=21")}
            >
              <i className="fab fa-x"></i>
            </button>

            <button
              className="fab-item fab3"
              onClick={() => window.open("https://www.instagram.com/doctirsoo/")}
            >
              <i className="fab fa-instagram"></i>
            </button>

            <button
              className="fab-item fab4"
              onClick={() => window.open("https://github.com/TirsoLang")}
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
  function Skill({ name, level }) {
    return (
      <div className="mb-3">
        <label>{name}</label>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            style={{ width: `${level}%` }}
          >
            {level}%
          </div>
        </div>
      </div>
    );
  }
  function Counter({ label, target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [target]);

    return (
      <div className="counter-card">
        <h1 className="text-info">{count}+</h1>
        <p>{label}</p>
      </div>
    );
  }


}
