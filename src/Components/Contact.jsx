import React from "react";

function Contact() {
  return (
    <section className="container my-5">
      <div className="card shadow-lg border-0 p-4 text-center">
        <h2 className="text-primary mb-3">Contact Me</h2>
        <p className="fs-5">📧 harshadnikam5171@gmail.com</p>
        <p className="fs-5">📞 +91-8975365171</p>
        <p className="fs-5">
          Or connect via{" "}
          <a
            href="https://www.linkedin.com/in/harshad-nikam/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none fw-bold text-primary"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
