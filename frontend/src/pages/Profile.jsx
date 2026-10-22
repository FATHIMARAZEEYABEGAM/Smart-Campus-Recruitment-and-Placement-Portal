import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [profile, setProfile] = useState({
    phone: "",
    department: "CSE",
    cgpa: "",
    graduationYear: "2027",
    skills: ""
  });

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "studentProfile",
      JSON.stringify(profile)
    );

    alert("Profile saved successfully!");

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


      {/* PROFILE */}

      <main className="dashboard-container">

        <p className="dashboard-tag">
          MY PROFILE
        </p>

        <h1>
          Student Profile
        </h1>

        <p>
          Complete your profile to find suitable placement opportunities.
        </p>


        <div
          className="dashboard-card"
          style={{
            marginTop: "30px",
            maxWidth: "700px"
          }}
        >

          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                value={user?.fullName || ""}
                disabled
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                value={user?.email || ""}
                disabled
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />

            </div>


            {/* DEPARTMENT */}

            <div className="form-group">

              <label>
                Department
              </label>

              <select
                name="department"
                value={profile.department}
                onChange={handleChange}
              >

                <option value="CSE">
                  Computer Science and Engineering
                </option>

                <option value="IT">
                  Information Technology
                </option>

                <option value="ECE">
                  Electronics and Communication Engineering
                </option>

                <option value="EEE">
                  Electrical and Electronics Engineering
                </option>

                <option value="MECH">
                  Mechanical Engineering
                </option>

              </select>

            </div>


            {/* CGPA */}

            <div className="form-group">

              <label>
                CGPA
              </label>

              <input
                type="number"
                name="cgpa"
                value={profile.cgpa}
                onChange={handleChange}
                placeholder="Enter your CGPA"
                min="0"
                max="10"
                step="0.01"
                required
              />

            </div>


            {/* GRADUATION YEAR */}

            <div className="form-group">

              <label>
                Graduation Year
              </label>

              <select
                name="graduationYear"
                value={profile.graduationYear}
                onChange={handleChange}
              >

                <option value="2027">
                  2027
                </option>

                <option value="2028">
                  2028
                </option>

                <option value="2029">
                  2029
                </option>

              </select>

            </div>


            {/* SKILLS */}

            <div className="form-group">

              <label>
                Technical Skills
              </label>

              <textarea
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder="Example: Java, Python, HTML, CSS, JavaScript, React, MongoDB, SQL"
                rows="5"
                required
              />

            </div>


            {/* SAVE */}

            <button
              type="submit"
              className="auth-button"
            >
              Save Profile
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default Profile;