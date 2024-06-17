import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project, handleDelete }) {
  const navigate = useNavigate();
  const handleEditProject = () => {
    navigate(`/edit-project/${project._id}`);
  };
  return (
    <div className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <div className="project-details">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <p className="project-date">
          {new Date(project.date).toLocaleDateString()}
        </p>
        <button onClick={handleEditProject} className="button primary">
          Edit
        </button>
        <button
          onClick={() => handleDelete(project._id)}
          className="button danger "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
