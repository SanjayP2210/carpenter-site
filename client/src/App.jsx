import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import AddProject from "./components/AddProject.jsx";
import EditProject from "./components/EditProject.jsx";
import Logout from "./components/Logout.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="blur-overlay"></div>
      <div className="content">
        <AuthProvider>
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/add-project" element={<AddProject />} />
                  <Route path="/edit-project/:id" element={<EditProject />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
