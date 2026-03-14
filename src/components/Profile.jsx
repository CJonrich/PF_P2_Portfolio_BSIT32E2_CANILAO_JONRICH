import { useState } from 'react';

export default function Profile({ personal }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="profile-section text-center py-5">
      <img
        src={personal.image}
        className="rounded-circle shadow mb-3 profile-img"
        width="150"
        height="150"
        alt="Profile"
      />

      <h1>{personal.name}</h1>
      <p className="mb-1">{personal.course}</p>
      <p className="mb-1">{personal.section}</p>
      <p className="mb-3">ID: {personal.id}</p>
      <p className="mt-3 fst-italic profile-intro">{personal.intro}</p>

      <button
        className="profile-toggle-btn mt-3"
        onClick={() => setShowContact(!showContact)}
      >
        {showContact ? 'Hide Additional Info' : 'Show Additional Info'}
      </button>

      {showContact && (
        <div className="mt-4">
          <ul className="profile-contact-list list-unstyled d-inline-block text-start">
            <li className="profile-contact-item">
              <strong>Email:</strong> {personal.email}
            </li>
            <li className="profile-contact-item">
              <strong>Contact Number:</strong>{' '}
              <a>09931506434</a>
            </li>
            <li className="profile-contact-item">
              <strong>GitHub:</strong>{' '}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repositories
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}