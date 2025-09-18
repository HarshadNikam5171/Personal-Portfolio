import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Git/GitHub",
    "MySQL",
    "Java",
    "Spring-Boot",
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center text-primary mb-4">Skills</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {skills.map((skill, index) => (
          <span key={index} className="badge bg-info text-dark fs-6 px-3 py-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
