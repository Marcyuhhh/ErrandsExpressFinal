import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lnavbar from '../../components/landingcoms/Lnavbar';
import Lfooter from '../../components/landingcoms/Lfooter';
import './landingpage.css';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Lnavbar />

      {/* Home Section */}
      <section id="home" className="section home">
  <h2 style={{ textAlign: 'center', marginTop: '150px' }}>Benefits</h2>
  <div className="benefit-container">
    <div className="benefit-item">
      <h3>Reliable</h3>
      <p>Count on trusted errand runners who deliver with care and accuracy—your tasks are in safe hands.</p>
    </div>
    <div className="benefit-item">
      <h3>Hassle-Free</h3>
      <p>No more complicated arrangements—just simple, smooth service every time.</p>
    </div>
    <div className="benefit-item">
      <h3>Time-Saving</h3>
      <p>Free up your schedule by letting us handle the errands while you focus on what matters.</p>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="section about">
        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>About Us</h2>
        <div className="about-content">
          <p>
            Errands Express connects users with reliable errand runners to handle tasks quickly and efficiently within 
            the campus. Whether it’s instructors needing to deliver documents or students requesting favors like food, 
            drinks, or essential materials, our platform ensures convenience and time savings...
          </p>
        </div>

        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Founders</h2>
        <h4 style={{ textAlign: 'center', marginTop: '10px' }}>
          Errands Express was founded by a group of students who understand firsthand the everyday challenges of campus life...
        </h4>
      </section>

      <section id="feedbacks" className="section feedback">
        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Feedbacks</h2>
        <h3>“Here’s what our campus community is saying…”</h3>
      </section>

      <section id="contact" className="section contact">
        <h2 style={{ textAlign: 'center', marginTop: '1100px' }}>Contact Us</h2>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Reach out—we’re always ready to connect and improve your campus experience.
        </p>
      </section>

      <Lfooter />
    </div>
  );
}

export default LandingPage;
