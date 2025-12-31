import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <p>All rights reserved</p>
      <div className="social-icons">
        <a href="https://www.facebook.com/dali.fk.01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/dalifk.01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:dalifk28@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="tel:27768667">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-ali-fkiri-375925310" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/dalifk" target="_blank" rel="https://github.com/dalifk">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
