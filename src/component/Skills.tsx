import cssImg from '../assets/css.jpg';
import htmlImg from '../assets/html.jpg';
import mongoDbImg from '../assets/mongoDb.jpg';
import reactImg from '../assets/react.jpg';
import mysqlImg from '../assets/mysql.jpg';
import phpImg from '../assets/php.jpg';
import nodeJsImg from '../assets/nodejs.png';
function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <img src={htmlImg} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-card">
          <img src={cssImg} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-card">
          <img src={reactImg} alt="React" />
          <p>React</p>
        </div>
        <div className="skill-card">
          <img src={mongoDbImg} alt="MongoDB" />
          <p>MongoDB</p>
        </div>
        <div className="skill-card">
          <img src={mysqlImg} alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-card">
          <img src={phpImg} alt="PHP" />
          <p>PHP</p>
        </div>
      
      <div className="skill-card">
          <img src={nodeJsImg} alt="Node.js" />
          <p>Node.js</p>
        </div>
        </div>
    </section>
  );
}

export default Skills;
