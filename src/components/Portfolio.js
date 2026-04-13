import React, { useState } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "LipaSafeHub",
      description: "Mobile safety and emergency response system for Lipa City."
    }
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    description: ""
  });
  
  

  const handleAddProject = () => {
    if (!newProject.name || !newProject.description) return;

    setProjects([...projects, newProject]);

    setNewProject({
      name: "",
      description: ""
    });
  };

  return (
    <div className="container py-5 text-light">

      {/* Upload Form */}
      <section className="mb-5">
        <h2 className="text-info text-center mb-4">Upload Project</h2>

        <div className="card bg-dark p-4">
          <input
            type="text"
            placeholder="Project Name"
            className="form-control mb-2"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
          />

          <textarea
            placeholder="Project Description"
            className="form-control mb-2"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          />

          <button className="btn btn-info" onClick={handleAddProject}>
            Upload Project
          </button>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-info text-center mb-4">Projects</h2>

        <div className="row g-3">
          {projects.map((proj, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-dark p-3">
                <h5 className="text-info">{proj.name}</h5>
                <p>{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    
  );
  
}