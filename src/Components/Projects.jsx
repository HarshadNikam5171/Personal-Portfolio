import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Hostel Management System",
      description: "PHP project to manage hostel admissions and student info.",
      tech: "PHP, MySQL, Bootstrap",
      link: "https://github.com/yourusername/project-link",
    },
    {
      title: "Visitor Book + Event Info Manager",
      description: "React project to manage visitors and events efficiently.",
      tech: "React, Context API, React Router",
      link: "https://github.com/yourusername/project-link",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center text-primary mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((proj, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <p>
                  <strong>Technologies:</strong> {proj.tech}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
