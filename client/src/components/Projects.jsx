import { useEffect, useState } from "react";
import { getProjects } from "../api";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProjects() {
      const projects = await getProjects();
      setProjects(projects);
    }
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`);
        setProjects(projects.filter((project) => project._id !== id));
        alert("Project deleted successfully!");
      } catch (error) {
        console.error(error);
        alert("Error deleting project");
      }
    }
  };

  const redirectAddProject = () => {
    navigate("/add-project");
  };
  return (
    <div className="projects">
      <h1>Projects</h1>
      <button onClick={redirectAddProject} className="button primary">
        Add Project
      </button>

      <br />
      <br />
      <br />
      <div className="projects-grid">
        {projects.map((project) => (
          <>
            <ProjectCard
              key={project._id}
              project={project}
              handleDelete={handleDelete}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
