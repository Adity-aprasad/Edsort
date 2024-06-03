import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../comp/Home.css';
import Container_x2 from '../image/Container_x2.svg';
import Container1_x2 from '../image/Container1_x2.svg';
import Container2_x2 from '../image/Container2_x2.svg';

export default function Wireframe1() {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleLoginClick = () => {
    navigate('/loginUi');
  };

  return (
    <div className="wireframe-1">
      <div className="header">
        <div className="header-content">
          <h1>Personalised Learning Program</h1>
          <p>Self Study Groups<br />
            Doubt Clearing Community<br />
            Support System</p>
        </div>
        <img src={Container_x2} alt="Container" className="header-image" />
      </div>

      <div className="main-content">
        <div className="introduction">
          <h2>Start Learning with EdSort</h2>
          <p>Your One stop destination for <br /> a more fun learning</p>
          <button className="take-quiz" onClick={handleQuizClick}>Take Quiz</button>
        </div>

        <div className="platform-description">
          <h2>EdSort</h2>
          <p>EdSort aims to make education fun and exciting by offering a vibrant community, interactive, and personalized learning experiences. Our platform is designed for collaborative learning, fostering growth together.</p>
        </div>

        <div className="contact-info">
          <h3>Get your questions answered about learning with EdSort</h3>
          <p>Call: +91 9631121762 | Email: edsortlearning@gmail.com</p>
        </div>
      </div>

      <div className="footer-image-container">
        <div className="footer-content">
          <h2>Collaborate, Learn, Succeed<br /> Your Path to Academic Excellence!</h2>
        </div>
      </div>

      <div className="action-buttons">
        <button className="log-in" onClick={handleLoginClick}>Login</button>
        <button className="join" onClick={handleLoginClick}>Join</button>
      </div>

      <div className="otp-verification">
        <h3>We’ll send an OTP for verification</h3>
        <div className="phone-input-container">
          <span className="country-code">+91</span>
          <input type="number" className="mobile-input" placeholder="Enter your mobile number" />
        </div>
      </div>

      <div className="weekly-revision">
        <div className="revision-time-table">
          <h3>Revision Time-Table</h3>
          <div className="schedule">
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="revision-details">
          <h3>Weekly Revision Topics</h3>
          <p>Unlock your potential with our personalized weekly revision timetable, designed to keep you on track and ensure you're fully prepared for every challenge.</p>

          <h3>Interactive Friendly Groups</h3>
          <p>Join our platform to experience interactive, friendly study groups tailored to enhance your learning journey.</p>

          <h3>Quizzes and LeaderBoard</h3>
          <p>Participate in our weekly quizzes and climb the leaderboard to showcase your knowledge. Earn exciting rewards for being on top.</p>
        </div>
      </div>

      <div className="contact-us">
        <h3>Contact Us</h3>
        <p>Email: edsortlearning@gmail.com</p>
      </div>
    </div>
  );
}
