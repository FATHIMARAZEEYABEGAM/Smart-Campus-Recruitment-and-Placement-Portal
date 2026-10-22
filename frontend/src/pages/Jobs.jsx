import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/jobs"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        setJobs(data);
      } catch (error) {
        console.error(error);

        setError(
          "Unable to load jobs. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="dashboard-page">

      {/* NAVBAR */}

      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          Smart<span>Campus</span>
        </div>

        <button
          onClick={() => navigate("/student-dashboard")}
        >
          ← Dashboard
        </button>

      </nav>


      {/* MAIN CONTENT */}

      <main className="dashboard-container">

        <p className="dashboard-tag">
          AVAILABLE JOBS
        </p>

        <h1>
          Placement Opportunities
        </h1>

        <p>
          Explore jobs and placement drives available for you.
        </p>


        {/* LOADING */}

        {loading && (
          <div
            className="dashboard-card"
            style={{
              marginTop: "30px",
              textAlign: "center"
            }}
          >
            <h2>
              Loading jobs...
            </h2>

            <p>
              Please wait while we fetch the latest opportunities.
            </p>
          </div>
        )}


        {/* ERROR */}

        {error && (
          <div
            className="dashboard-card"
            style={{
              marginTop: "30px",
              textAlign: "center"
            }}
          >
            <h2>
              Unable to Load Jobs
            </h2>

            <p style={{ color: "red" }}>
              {error}
            </p>
          </div>
        )}


        {/* JOBS */}

        {!loading && !error && (

          <div
            className="dashboard-grid"
            style={{ marginTop: "35px" }}
          >

            {jobs.map((job) => (

              <div
                className="dashboard-card"
                key={job._id}
              >

                <div className="job-domain">
                  {job.domain}
                </div>

                <h2>
                  {job.jobTitle}
                </h2>

                <p>
                  🏢 <strong>{job.companyName}</strong>
                </p>

                <p>
                  💰 Salary: {job.salary}
                </p>

                <p>
                  🎓 Minimum CGPA: {job.minimumCGPA}
                </p>

                <p>
                  📚 Department: {job.eligibleDepartment}
                </p>

                <p>
                  📅 Deadline:{" "}
                  {new Date(job.deadline).toLocaleDateString()}
                </p>


                <p>
                  {job.description}
                </p>


                <div className="job-skills">

                  <strong>
                    Required Skills:
                  </strong>

                  <br />

                  {job.requiredSkills.map(
                    (skill, index) => (

                      <span
                        className="job-skill"
                        key={index}
                      >
                        {skill}
                      </span>

                    )
                  )}

                </div>


                <button
                  onClick={() =>
                    alert(
                      "Job details and Apply Now will be connected next."
                    )
                  }
                >
                  View Job →
                </button>

              </div>

            ))}

          </div>

        )}


        {/* NO JOBS */}

        {!loading &&
          !error &&
          jobs.length === 0 && (

            <div
              className="dashboard-card"
              style={{
                marginTop: "30px",
                textAlign: "center"
              }}
            >

              <h2>
                No Jobs Available
              </h2>

              <p>
                There are currently no placement opportunities.
              </p>

            </div>

          )}

      </main>

    </div>
  );
}

export default Jobs;