import { useState } from "react";
import axios from "axios";

function AddProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/projects", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Project added successfully!");
      setFormData({
        title: "",
        description: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error adding project");
    }
  };

  return (
    <div className="login">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;
