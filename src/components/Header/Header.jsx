import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-logo">dördüncü blog*</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Ana səhifə</a></li>
            <li><a href="/about">Haqqında</a></li>
          </ul>
        </nav>
      </div>
      <img className="page-logo" src="./logo4blog.png" alt="logo" />
    </header>
  );
};

export default Header;
