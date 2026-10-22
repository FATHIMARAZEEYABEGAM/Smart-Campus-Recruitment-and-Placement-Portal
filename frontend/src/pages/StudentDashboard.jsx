import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  // Get logged-in student information
  const user = JSON.parse(
    localStorage.getItem("user")
  );


  // ================= LOGOUT =================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };


  // ================= PAGE =================

  return (

    <div className="dashboard-page">


      {/* ================= NAVBAR ================= */}

      <nav className="dashboard-navbar">

        {/* Logo */}

        <div className="dashboard-logo">

          Smart<span>Campus</span>

        </div>


        {/* User + Logout */}

        <div className="dashboard-user">

          <span>
            Welcome, {user?.fullName || "Student"}
          </span>

          <button onClick={handleLogout}>
            Logout
          </button>

        </div>

      </nav>



      {/* ================= MAIN CONTENT ================= */}

      <main className="dashboard-container">


        {/* ================= HEADER ================= */}

        <div className="dashboard-header">

          <p className="dashboard-tag">
            STUDENT DASHBOARD
          </p>


          <h1>
            Welcome back, {user?.fullName || "Student"} 👋
          </h1>


          <p>
            Manage your placement journey from one place.
          </p>

        </div>



        {/* ================= DASHBOARD CARDS ================= */}

        <div className="dashboard-grid">


          {/* =================================================
              AVAILABLE JOBS
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              💼
            </div>


            <h2>
              Available Jobs
            </h2>


            <p>
              Explore placement opportunities from different
              domains and find jobs that match your skills.
            </p>


            <button
              onClick={() => navigate("/jobs")}
            >
              View Jobs →
            </button>

          </div>



          {/* =================================================
              MY APPLICATIONS
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📄
            </div>


            <h2>
              My Applications
            </h2>


            <p>
              Track all your job applications and check
              your selection status.
            </p>


            <button
              onClick={() => navigate("/applications")}
            >
              View Applications →
            </button>

          </div>



          {/* =================================================
              PLACEMENT CHANCES
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🎯
            </div>


            <h2>
              Placement Chances
            </h2>


            <p>
              Check how well your skills match with
              available placement opportunities.
            </p>


            <button
              onClick={() => navigate("/placement-chances")}
            >
              Check Chances →
            </button>

          </div>



          {/* =================================================
              MY PROFILE
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              👤
            </div>


            <h2>
              My Profile
            </h2>


            <p>
              Manage your personal information, academic
              details, CGPA and technical skills.
            </p>


            <button
              onClick={() => navigate("/profile")}
            >
              View Profile →
            </button>

          </div>



          {/* =================================================
              UPLOAD RESUME
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📤
            </div>


            <h2>
              Upload Resume
            </h2>


            <p>
              Upload your latest resume so we can analyze
              your skills and match you with suitable jobs.
            </p>


            <button
              onClick={() => navigate("/resume-upload")}
            >
              Upload Resume →
            </button>

          </div>



          {/* =================================================
              JOB RECOMMENDATIONS
          ================================================= */}

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              ⭐
            </div>


            <h2>
              Job Recommendations
            </h2>


            <p>
              Get personalized job recommendations based
              on your skills and qualifications.
            </p>


            <button
              onClick={() => navigate("/jobs")}
            >
              Find Jobs →
            </button>

          </div>


        </div>


      </main>


    </div>

  );

}

export default StudentDashboard;