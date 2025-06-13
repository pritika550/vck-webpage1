import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/images/vckbanner.jpg';
import campus1 from '../assets/images/vck1.jpeg';
import campus2 from '../assets/images/vck2.jpg';

const HomePage = () => {
    return (
        <div className="page-container" style={{ overflow: "auto" }}>
                <div className="hero-section">
                    <img src={banner} alt="Vivekanand college campus" className="hero-banner-image" />
                    <div className="hero-overlay-text">
                        <h1>Welcome to Vivekanand <br></br>College!</h1>
                        <p>Your journey to excellence starts here.</p>
                        <Link to="/admission" className="btn hero-btn">
                            Apply Now! </Link>{""}
                    </div>
                </div>

                <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>

                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                <h2><strong>Why Choose Vivekanand College?</strong></h2>
                <ul>
                    <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                    <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                    <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                    <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
                </ul>

                <h2>Campus Life & Facilities</h2>
                
                <div className="image-gallery">
                    <img src={campus1} alt="Students studying in library" />
                    <img src={campus2} alt="Students on campus ground"/>
                </div>
                
                
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                    <div className="call-to-action">
                      <p>Ready to explore our courses?</p>
                      <Link to="/courses" className="btn">
                         Explore Courses
                       </Link>{" "}
                    </div>
        </div>
  );
};
export default HomePage;
                    