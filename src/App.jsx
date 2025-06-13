import React, { Fragment, useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionsPage from "./Pages/AdmissionPage";
import Footer from "./Components/footer/Footer";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Admission.css";
import "./styles/Courses.css";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";


function App () {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
      <>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pritika Suresh Kadam"
          studentPhotoUrl="/images/pritika.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
            <div className="main-layout">
                <Header/>
                 <div className="content">
                    <Routes>
                        <Route path="/" element={< HomePage/>}/>
                         <Route path="/contact" element={< ContactPage/>}/>
                         <Route path="/about" element={< AboutPage/>}/>
                         <Route path="/courses" element={< CoursesPage/>}/>
                         <Route path="/admission" element={< AdmissionsPage/>}/>              
                    </Routes>
                </div>
                <ChatbotComponent/>
                <Footer/>
            </div>
        </Router>
        </>
    );
}


export default App;