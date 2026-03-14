export default function Hobbies({ hobbies }) {
  return (
    <section className="hobbies-section container py-5">
      <h2 className="text-center mb-4">Hobbies</h2>

      <div className="d-flex flex-wrap justify-content-center hobbies-list">
        {hobbies.map((hobby, idx) => (
          <span key={idx} className="hobby-badge m-2">
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}