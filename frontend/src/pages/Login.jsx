import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
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

        setLoading(false);

        return;
      }


      // Save login information

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      // Redirect based on role

      if (data.user.role === "student") {

        navigate("/student-dashboard");

      } else {

        alert(
          "Your role dashboard will be added next."
        );

      }

    } catch (error) {

      setError(
        "Unable to connect to the server. Please make sure the backend is running."
      );

    }

    setLoading(false);
  };


  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <h1>
            Smart<span>Campus</span>
          </h1>

          <p>
            Login to your account
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Email Address
            </label>

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

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

          </div>


          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>


        {error && (

          <p
            style={{
              color: "red",
              marginTop: "15px",
              textAlign: "center"
            }}
          >
            {error}
          </p>

        )}


        <p className="auth-footer">

          Don't have an account?{" "}

          <Link to="/register">
            Create Account
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

export default Login;