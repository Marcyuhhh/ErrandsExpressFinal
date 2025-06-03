import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/ErrandsLogo.png';
import './Lnavbar.css';

function Lnavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
    setMenuOpen(false);
  };

  return (
    <header className="landing-header">
      <div className="landing-logo-container">
        <img src={logo} alt="Errands Express Logo" className="landing-header-logo" />
        <h1 className="logo">ERRANDS EXPRESS</h1>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="landing-nav-links">
           <li><button onClick={() => scrollToSection('home')}>Home</button></li>
  <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
  <li><button onClick={() => scrollToSection('feedbacks')}>Feedbacks</button></li>
  <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
  <li><a href="/auth" onClick={() => setMenuOpen(false)}>Sign Up</a></li>
        </ul>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Lnavbar;
