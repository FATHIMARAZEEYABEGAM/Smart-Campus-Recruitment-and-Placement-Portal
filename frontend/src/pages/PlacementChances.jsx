import { Link } from "react-router-dom";

function PlacementChances() {
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
          PLACEMENT CHANCES
        </p>

        <h1>
          Your Placement Analysis
        </h1>

        <p>
          Check your eligibility and placement readiness.
        </p>

        <div className="dashboard-grid">

          <div className="dashboard-card">

            <h2>
              🎯 Overall Readiness
            </h2>

            <h1 style={{ color: "#2563eb" }}>
              75%
            </h1>

            <p>
              Your current profile shows good placement readiness.
            </p>

          </div>


          <div className="dashboard-card">

            <h2>
              📚 Skills
            </h2>

            <p>
              Java
            </p>

            <p>
              Python
            </p>

            <p>
              SQL
            </p>

            <p>
              React
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default PlacementChances;