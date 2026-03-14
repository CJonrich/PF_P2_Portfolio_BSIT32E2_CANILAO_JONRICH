export default function Projects({ projects }) {
  return (
    <section className="projects-section container py-5">
      <div className="section-heading text-center mb-5">
        <p className="section-label">Sample Work</p>
        <h2>Sample Projects</h2>
        <p className="section-subtitle">
          Some projects I have created that reflect my skills and interests in development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <article key={idx} className="project-card">
            <div className="project-card-top">
              <span className="project-icon">💻</span>
              <span className="project-tag">GitHub Repo</span>
            </div>

            <h3 className="project-title">{proj.name}</h3>
            <p className="project-description">{proj.description}</p>

            <a
              href={proj.github || proj.link}
              className="project-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}