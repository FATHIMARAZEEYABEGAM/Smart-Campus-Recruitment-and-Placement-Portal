import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="navbar-container">

          <Link to="/" className="logo">
            Smart<span>Campus</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          <div className="nav-buttons">

            <Link to="/login" className="login-btn">
              Login
            </Link>

            <Link to="/register" className="register-btn">
              Register
            </Link>

          </div>

        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <p className="hero-badge">
              SMART CAMPUS RECRUITMENT PLATFORM
            </p>

            <h1>
              Connecting Students
              <br />
              With <span>Career Opportunities</span>
            </h1>

            <p>
              A centralized platform that simplifies campus recruitment
              by connecting students, recruiters and placement officers
              through one smart digital system.
            </p>

            <div className="hero-buttons">

              <Link to="/register" className="primary-btn">
                Get Started
              </Link>

              <a href="#how-it-works" className="secondary-btn">
                Explore Platform
              </a>

            </div>

          </div>


          {/* Placement Overview */}

          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-title">
                Placement Overview
              </div>

              <div className="hero-card-year">
                2026
              </div>

              <div className="hero-card-item">

                <div className="hero-card-icon">
                  01
                </div>

                <div>
                  <h4>1200+</h4>
                  <p>Students</p>
                </div>

              </div>


              <div className="hero-card-item">

                <div className="hero-card-icon">
                  02
                </div>

                <div>
                  <h4>50+</h4>
                  <p>Companies</p>
                </div>

              </div>


              <div className="hero-card-item">

                <div className="hero-card-icon">
                  03
                </div>

                <div>
                  <h4>300+</h4>
                  <p>Placements</p>
                </div>

              </div>


              <div className="hero-card-item">

                <div className="hero-card-icon">
                  04
                </div>

                <div>
                  <h4>85%</h4>
                  <p>Success Rate</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="container">

          <div className="section-header">

            <p className="section-tag">
              ABOUT THE PLATFORM
            </p>

            <h2>
              Simplifying the Campus Placement Process
            </h2>

            <p>
              Smart Campus Recruitment and Placement Portal is designed
              to bring students, companies and placement officers together
              on a single platform.
            </p>

          </div>


          <div className="about-content">

            <div className="about-box">

              <h3>
                One Platform. Three Roles.
              </h3>

              <ul className="about-list">

                <li>
                  🎓 Students can manage profiles, skills and resumes.
                </li>

                <li>
                  🏢 Recruiters can create and manage placement drives.
                </li>

                <li>
                  👨‍💼 Placement officers can monitor recruitment activities.
                </li>

                <li>
                  🎯 Students can discover suitable career opportunities.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section id="features" className="section features-section">

        <div className="container">

          <div className="section-header">

            <p className="section-tag">
              PLATFORM FEATURES
            </p>

            <h2>
              Everything You Need for Campus Recruitment
            </h2>

            <p>
              A centralized system designed to make campus recruitment
              simpler, faster and more organized.
            </p>

          </div>


          <div className="features-grid">

            <div className="feature-card">

              <div className="feature-icon">
                🎓
              </div>

              <h3>
                Student Management
              </h3>

              <p>
                Students can manage their profiles, skills,
                academic information, projects and resumes.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🏢
              </div>

              <h3>
                Recruiter Management
              </h3>

              <p>
                Companies can create placement drives,
                define eligibility criteria and manage applicants.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🎯
              </div>

              <h3>
                Smart Job Matching
              </h3>

              <p>
                Match students with suitable job opportunities
                based on their skills and qualifications.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                📄
              </div>

              <h3>
                Resume Analysis
              </h3>

              <p>
                Analyze resumes and provide useful suggestions
                for improving students' career profiles.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>
                Placement Analytics
              </h3>

              <p>
                Placement officers can monitor recruitment
                activities using centralized reports and analytics.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🔔
              </div>

              <h3>
                Job Recommendations
              </h3>

              <p>
                Students can receive personalized recommendations
                for relevant placement opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="section workflow-section">

        <div className="container">

          <div className="section-header">

            <p className="section-tag">
              HOW IT WORKS
            </p>

            <h2>
              A Simple Recruitment Journey
            </h2>

            <p>
              Follow four simple steps from profile creation
              to successful placement.
            </p>

          </div>


          <div className="workflow">

            <div className="workflow-step">

              <div className="step-number">
                01
              </div>

              <h3>
                Create Profile
              </h3>

              <p>
                Students create their profile with academic
                details, skills and resume.
              </p>

            </div>


            <div className="workflow-step">

              <div className="step-number">
                02
              </div>

              <h3>
                Discover Jobs
              </h3>

              <p>
                View placement drives and opportunities
                matching your eligibility.
              </p>

            </div>


            <div className="workflow-step">

              <div className="step-number">
                03
              </div>

              <h3>
                Apply
              </h3>

              <p>
                Apply to suitable companies directly
                through the platform.
              </p>

            </div>


            <div className="workflow-step">

              <div className="step-number">
                04
              </div>

              <h3>
                Get Placed
              </h3>

              <p>
                Track your application and selection status
                until final placement.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div className="cta-container">

          <h2>
            Start Your Journey Towards Your Dream Career
          </h2>

          <p>
            Join the smart campus recruitment platform today.
          </p>

          <Link to="/register" className="cta-button">
            Create Your Account
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h2>
              Smart<span>Campus</span>
            </h2>

            <p>
              Smart Campus Recruitment and Placement Portal
            </p>

          </div>

          <div className="footer-links">

            <a href="#about">About</a>

            <a href="#features">Features</a>

            <a href="#how-it-works">How It Works</a>

          </div>

        </div>


        <div className="footer-bottom">

          © 2026 Smart Campus. All Rights Reserved.

        </div>

      </footer>

    </div>
  );
}

export default Home;