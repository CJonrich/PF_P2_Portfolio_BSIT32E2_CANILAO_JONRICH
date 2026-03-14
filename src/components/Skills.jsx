export default function Skills({ skills }) {
  return (
    <section className="skills-section container py-5">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-badge m-2 p-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}