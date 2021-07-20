import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      &copy; 2021 created by
      <a href="https://www.ezecastellanos.com.ar">Ezequiel Castellanos</a>
      <div>
        <a
          href="https://twitter.com/Ezequiel_Caste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter-square" />
        </a>
        <a
          href="https://www.linkedin.com/in/ezequiel-castellanos/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </footer>
  );
};
