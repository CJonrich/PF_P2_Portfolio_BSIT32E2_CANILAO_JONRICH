import { useEffect, useState } from 'react';
import heroImage from './assets/hero.png';
import profileImage from '../picture.png';
import './App.css';

const studentData = {
  personal: {
    name: 'Canilao Jonrich',
    role: 'BSIT Student and Frontend-Focused Developer',
    section: 'BSIT-32E2',
    course: 'Bachelor of Science in Information Technology',
    id: '1585-23',
    image: profileImage,
    email: 'crisjonrich@gmail.com',
    phone: '09931506434',
    github: 'https://github.com/CJonrich',
    intro:
      'I build clean, user-friendly interfaces and enjoy turning technical ideas into useful digital experiences. My focus is web development, object-oriented programming, and steady growth through hands-on projects.',
  },
  stats: [
    { value: '3+', label: 'Portfolio-ready projects' },
    { value: '6', label: 'Academic recognitions' },
    { value: '2023', label: 'Started BSIT journey' },
  ],
  education: [
    {
      level: 'College',
      school: 'Lyceum of Alabang',
      detail: 'Bachelor of Science in Information Technology',
      year: '2023 - Present',
    },
    {
      level: 'Elementary and High School',
      school: 'Landayan San Pedro',
      detail: 'Built the discipline and academic foundation for tech studies',
      year: '2010 - 2022',
    },
  ],
  skills: [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'VB.NET',
    'ASP.NET',
    'MySQL',
    'SQLite',
    'GitHub',
    'Responsive Design',
  ],
  strengths: [
    'Designing interfaces that feel simple and easy to use',
    'Learning new frameworks and tools quickly',
    'Structuring projects with clear logic and readable code',
  ],
  hobbies: [
    'Coding personal projects',
    'UI and UX exploration',
    'Learning programming languages',
    'Exploring new technologies',
    'Watching tech tutorials',
  ],
  projects: [
    {
      name: 'ASP.NET Web Authentication API',
      type: 'Backend and Security',
      description:
        'An ASP.NET Web API for secure login, authorization, and user access management in web applications.',
      github:
        'https://github.com/Ronan245/MIDTERM_Q2_BSIT32E2_RONAN-JUSTINE_GA',
    },
    {
      name: 'React Features App',
      type: 'Frontend Development',
      description:
        'A React application that demonstrates component architecture, state management, and interactive UI behavior.',
      github:
        'https://github.com/Ronan245/PF_A2_BSIT32E2_GA_RONAN-JUSTINE',
    },
    {
      name: 'HTML/CSS Reflection Project',
      type: 'Responsive Layout',
      description:
        'A structured and responsive website focused on content presentation, layout clarity, and polished styling.',
      github:
        'https://github.com/Ronan245/PRELIM_PROJECT_BONUS_BSIT32E2_RONAN-JUSTINE_GA',
    },
  ],
  achievements: [
    'Academic Excellence with Honors (2017 - 2018)',
    'Academic Achiever (2018 - 2019)',
    'Academic Excellence with Honors (2019 - 2020)',
    'Academic Excellence with Honors (2020 - 2021)',
    'Academic Excellence with High Honors (2021 - 2022)',
    "Dean's Lister (2024 - 2025)",
  ],
};

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`portfolio-shell ${theme}`}>
      <header className="topbar">
        <a className="brand" href="#home">
          JONRICH
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === 'light' ? 'dark' : 'light',
            )
          }
          aria-label="Toggle theme"
        >
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio 2026</p>
            <h1>
              Building modern student work with a sharp eye for layout, code,
              and usability.
            </h1>
            <p className="hero-text">{studentData.personal.intro}</p>

            <div className="hero-actions">
              <a className="primary-action" href="#work">
                Explore Projects
              </a>
              <a
                className="secondary-action"
                href={studentData.personal.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>

            <div className="stats-grid">
              {studentData.stats.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-header">
                <span>Student Profile</span>
                <span>{studentData.personal.section}</span>
              </div>

              <img
                className="portrait-image"
                src={studentData.personal.image}
                alt={studentData.personal.name}
              />

              <div className="portrait-info">
                <p>{studentData.personal.role}</p>
                <h2>{studentData.personal.name}</h2>
                <p>{studentData.personal.course}</p>
              </div>
            </div>

            <img
              className="accent-illustration"
              src={heroImage}
              alt="Abstract portfolio accent"
            />
          </div>
        </section>

        <section className="about-grid" id="about">
          <article className="panel intro-panel">
            <p className="eyebrow">About Me</p>
            <h3>Focused on turning ideas into polished digital experiences.</h3>
            <p>
              I enjoy combining structure, creativity, and curiosity when I
              build. Whether I am designing a UI or working through application
              logic, I aim for work that feels both useful and thoughtful.
            </p>
          </article>

          <article className="panel">
            <p className="eyebrow">Strengths</p>
            <ul className="detail-list">
              {studentData.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="eyebrow">Skills Stack</p>
            <div className="chip-wrap">
              {studentData.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Contact</p>
            <div className="contact-block" id="contact">
              <p>Email</p>
              <a href={`mailto:${studentData.personal.email}`}>
                {studentData.personal.email}
              </a>
              <p>Phone</p>
              <a href={`tel:${studentData.personal.phone}`}>
                {studentData.personal.phone}
              </a>
              <p>Student ID</p>
              <span>{studentData.personal.id}</span>
            </div>
          </article>
        </section>

        <section className="projects-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h3>
              Projects that reflect both technical growth and practical
              execution.
            </h3>
          </div>

          <div className="projects-grid">
            {studentData.projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-meta">
                  <span>{project.type}</span>
                </div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href={project.github} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="journey-column">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h3>My academic foundation in technology and development.</h3>
            </div>

            <div className="timeline">
              {studentData.education.map((item) => (
                <article key={item.level} className="timeline-card">
                  <span>{item.year}</span>
                  <h4>{item.level}</h4>
                  <p>{item.school}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
          </div>

          <div className="journey-column">
            <div className="section-heading">
              <p className="eyebrow">Recognition</p>
              <h3>Achievements that mark consistency, effort, and progress.</h3>
            </div>

            <div className="achievement-list">
              {studentData.achievements.map((achievement) => (
                <article key={achievement} className="achievement-item">
                  <span className="achievement-marker" />
                  <p>{achievement}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lifestyle-section">
          <div className="section-heading">
            <p className="eyebrow">Beyond Coding</p>
            <h3>Interests that keep my creativity and curiosity active.</h3>
          </div>

          <div className="chip-wrap hobby-wrap">
            {studentData.hobbies.map((hobby) => (
              <span key={hobby} className="hobby-chip">
                {hobby}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
