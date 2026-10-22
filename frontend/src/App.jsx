import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";

import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import PlacementChances from "./pages/PlacementChances";
import Profile from "./pages/Profile";
import ResumeUpload from "./pages/ResumeUpload";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/placement-chances"
          element={<PlacementChances />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/resume-upload"
          element={<ResumeUpload />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;