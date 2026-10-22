import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumeUpload() {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setResume(file);
      setMessage("");
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    if (!resume) {
      setMessage("Please select your resume first.");
      return;
    }

    localStorage.setItem(
      "studentResume",
      JSON.stringify({
        name: resume.name,
        size: resume.size,
        type: resume.type
      })
    );

    setMessage("Resume uploaded successfully!");
  };

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
          RESUME
        </p>

        <h1>
          Upload Your Resume
        </h1>

        <p>
          Upload your latest resume to improve your job matching.
        </p>

        {/* UPLOAD CARD */}
        <div
          className="dashboard-card"
          style={{
            maxWidth: "700px",
            marginTop: "35px"
          }}
        >

          <form onSubmit={handleUpload}>

            <div className="form-group">

              <label>
                Select Resume
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />

            </div>

            {resume && (
              <div
                style={{
                  padding: "15px",
                  marginBottom: "20px",
                  background: "#eff6ff",
                  borderRadius: "8px"
                }}
              >
                <strong>
                  Selected Resume:
                </strong>

                <p style={{ marginTop: "5px" }}>
                  {resume.name}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="auth-button"
            >
              Upload Resume
            </button>

          </form>

          {message && (
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                color: message.includes("successfully")
                  ? "green"
                  : "red",
                fontWeight: "600"
              }}
            >
              {message}
            </p>
          )}

        </div>

        {/* GUIDELINES */}
        <div
          className="dashboard-card"
          style={{
            maxWidth: "700px",
            marginTop: "25px"
          }}
        >

          <h2>
            📄 Resume Guidelines
          </h2>

          <p>
            • Upload your latest resume.
          </p>

          <p>
            • Use PDF, DOC or DOCX format.
          </p>

          <p>
            • Include your education and CGPA.
          </p>

          <p>
            • Include your technical skills.
          </p>

          <p>
            • Include your projects and certifications.
          </p>

        </div>

      </main>

    </div>
  );
}

export default ResumeUpload;