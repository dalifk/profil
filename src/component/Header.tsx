import { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>Dali</a>
        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? (
              <span className="theme-icon">☀️</span>
            ) : (
              <span className="theme-icon">🌙</span>
            )}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#projects" onClick={closeMenu}>My Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#Footer" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
