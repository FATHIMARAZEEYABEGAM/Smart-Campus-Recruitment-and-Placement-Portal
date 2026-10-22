import { Link } from "react-router-dom";

function Applications() {
  return (
    <div className="dashboard-page">

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          Smart<span>Campus</span>
        </div>

        <Link
          to="/student-dashboard"
          className="back-dashboard"
        >
          ← Dashboard
        </Link>

      </nav>

      <main className="dashboard-container">

        <p className="dashboard-tag">
          MY APPLICATIONS
        </p>

        <h1>
          My Job Applications
        </h1>

        <p>
          Track the status of your placement applications.
        </p>

        <div className="dashboard-card">

          <h2>
            Software Developer
          </h2>

          <p>
            Company: Tech Solutions Pvt Ltd
          </p>

          <p>
            Applied Date: September 4, 2026
          </p>

          <p>
            Status:
            <strong style={{ color: "#2563eb" }}>
              {" "}Under Review
            </strong>
          </p>

        </div>

      </main>

    </div>
  );
}

export default Applications;