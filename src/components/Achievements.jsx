export default function Achievements({ achievements }) {
  return (
    <section className="achievements-section container py-5">
      <div className="section-heading text-center mb-5">
        <p className="section-label">Milestones</p>
        <h2>Achievements</h2>
        <p className="section-subtitle">
          Some academic recognitions I have received throughout my studies.
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((award, idx) => (
          <article key={idx} className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <p className="achievement-text">{award}</p>
          </article>
        ))}
      </div>
    </section>
  );
}