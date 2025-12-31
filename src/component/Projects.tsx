import afterSaleImage from '../assets/after sale .png';
import ecommerceImage from '../assets/e commerce website.png';

function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={afterSaleImage} alt="After-Sales Service App" className="project-image" />
          <h3>After-Sales Service App</h3>
          <p>Web application using React, Node.js, and MySQL to manage after-sales service workflow. Features include ticket management, customer tracking, and service history.</p>
          <div className="project-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MySQL</span>
          </div>
        </div>
        <div className="project-card">
          <img src={ecommerceImage} alt="E-commerce Website" className="project-image" />
          <h3>E-commerce Website</h3>
          <p>Online store built with HTML, CSS, PHP, and MySQL with user management and payment systems. Includes shopping cart, user authentication, and admin panel.</p>
          <div className="project-tech">
            <span className="tech-tag">HTML/CSS</span>
            <span className="tech-tag">PHP</span>
            <span className="tech-tag">MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
