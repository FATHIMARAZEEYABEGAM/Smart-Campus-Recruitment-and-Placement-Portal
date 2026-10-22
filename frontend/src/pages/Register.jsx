import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setMessage("Registration successful!");

      setFormData({
        fullName: "",
        email: "",
        password: "",
        role: ""
      });

    } catch (error) {

      setError(
        "Unable to connect to the server. Please make sure the backend is running."
      );

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <h1>
            Smart<span>Campus</span>
          </h1>

          <p>Create your account</p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />

          </div>

          <div className="form-group">

            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >

              <option value="">
                Select your role
              </option>

              <option value="student">
                Student
              </option>

              <option value="recruiter">
                Recruiter
              </option>

              <option value="placement_officer">
                Placement Officer
              </option>

            </select>

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        {message && (
          <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>
            {message}
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <p className="auth-footer">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Register;