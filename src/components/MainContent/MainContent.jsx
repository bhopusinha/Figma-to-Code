import React from 'react';
import './MainContent.css';


const courses = [
  { name: "C++", description: "Learn C++ for strong programming fundamentals." },
  { name: "MERN Stack", description: "Master the MERN stack for high-demand projects." },
  { name: "Data Structure & Algorithm", description: "Excel in Data Structures and Algorithms for interview success." },
  { name: "Competitive Programming", description: "Excel in Data Structures and Algorithms for interview success." }
];

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="intro">
        <p className="badge">🎓 An <strong>IIT Delhi</strong> Alumni Initiative</p>
        <h1>Become an Expert in the field of <span>Data Science with 6 courses</span></h1>
        <p>A specially crafted Tech Kickstarter, with <strong>5+ extensive online courses.</strong></p>
        <div className="badges">
          <span>📚 Personal Mentorship</span>
          <span>🎓 Internship Assistance</span>
          <span>🏆 Industry Certified Courses</span>
        </div>
        <div className="buttons">
          <button className="enroll-now">Enroll Now</button>
          <button className="know-more">Know More</button>
        </div>
      </section>
      
      <section className="highlights">
        <div className="highlight">
          <h3>24</h3>
          <p>Courses</p>
        </div>
        <div className="highlight">
          <h3>30k+</h3>
          <p>Learners</p>
        </div>
        <div className="highlight">
          <h3>100k+</h3>
          <p>Doubts Solved</p>
        </div>
        <div className="highlight">
          <h3>10k+</h3>
          <p>Student Projects</p>
        </div>
      </section>
      
      <section className="course-curriculum">
        <h4>DATASCIENCE COURSE LEARNING PATH</h4>
        <h2>Data Science Course Curriculum</h2>
        <div className="course-list">
          {courses.map((course, index) => (
            <div key={index} className="course-item">
              <div>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
              <a className="view-curriculum">
                <span role="img" aria-label="view">👁️</span> View Curriculum
              </a>
            </div>
          ))}
        </div>
      </section>
      
      <section className="refund-offer">
        <h2>Don't miss out on this <span>limited-time</span> opportunity to learn for Free!</h2>
        <div className="refund-info">
          <div className="offer-text">100% Refund Offer 😍</div>
          <div className="offer-countdown">Offer ends in 10:00 mins</div>
        </div>
      </section>
      
      <section className="companies">
        <h2>Top Companies Hiring <span>Data Scientist</span></h2>
        <div className="company-logos">
          <div className="logo">Logo</div>
          <div className="logo">Logo</div>
          <div className="logo">Logo</div>
          <div className="logo">Logo</div>
          <div className="logo">Logo</div>
        </div>
      </section>
      
      <section className="certificates-internships">
        <h2>Unlock <span>6 Certificates</span> & Internship Opportunities!</h2>
        <div className="certificates">
          <div className="certificate-image">Certificate Image</div>
          <div className="certificate-text">Get 6 Industry Recognized Certificates!</div>
          <div className="certificate-text">Bag Internship Opportunities!</div>
          <div className="certificate-image">Internship Image</div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
