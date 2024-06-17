import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/projects/${id}`
        );
        setProject(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/projects/${id}`, project);
      alert("Project updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Error updating project");
    }
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={project.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;
