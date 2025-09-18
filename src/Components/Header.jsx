import React from "react";
import Me from "../Assets/Me.jpg";

function Header() {
  return (
    <header className="text-center bg-primary text-white py-5">
      <img
        src={Me}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h1 className="fw-bold">Harshad D. Nikam</h1>
      <p className="lead">Full Stack Developer | MCA Student</p>
      <div className="d-flex justify-content-center gap-3">
        <a
          href="https://github.com/HarshadNikam5171"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harshad-nikam/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light btn-sm"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
