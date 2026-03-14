export default function Education({ education }) {
  return (
    <section className="education-section container py-5">
      <div className="section-heading text-center mb-5">
        <p className="section-label">My Journey</p>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {education.map((edu, idx) => (
          <article key={idx} className="education-card">
            <div className="education-top">
              <span className="education-dot" />
              <span className="education-year">{edu.year}</span>
            </div>

            <h3 className="education-level">{edu.level}</h3>
            <p className="education-school">{edu.school}</p>

            {edu.course && (
              <p className="education-course">
                <strong>Course:</strong> {edu.course}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}