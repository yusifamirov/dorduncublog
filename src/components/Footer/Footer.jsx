import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2023 dördüncü blog*. Bütün hüquqları qorunur. | 
          <a href="/privacy" className="footer-link">Məxfilik Siyasəti</a> | 
          <a href="/terms" className="footer-link">Şərtlər</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
