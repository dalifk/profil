import { useState, useEffect } from 'react';
import Projects from './component/Projects';
import Header from './component/Header';
import Footer from './component/Footer';
import Skills from './component/Skills';
import profile_pic from './assets/WhatsApp Image 2025-12-14 at 00.15.02.jpeg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <section id="home">
        {/* You can add Hero section here */}
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section id="about" className="about-section">
  <div className="about-container">
    <img src={profile_pic} alt="My Profile" className="profile-image" />
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Hi my name is mohamed ali fkiri.<br/>
I am a passionate Web Developer specialized in building full-stack web applications. I enjoy creating clean, user-friendly interfaces and developing reliable back-end solutions. I have a strong interest in continuous learning and improving my technical skills through practical projects.
I hold a Bachelor’s degree (Licence) in Computer Science from the Institut Supérieur de Langues Appliquées et de l’Informatique de Béja (ISLAIB).
      </p>
    </div>
  </div>
</section>
      <section id="projects">
        <Projects />
      </section>
      <section id='Skills'>
    <Skills />
    </section>
    <section id='Footer'>
      <Footer />
      </section>
    </>
  );
}

export default App;
