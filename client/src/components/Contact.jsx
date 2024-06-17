import "./Contact.css";

function Contact() {
  return (
    <div className="contact-card">
      <div className="project-card">
        <div className="project-details" style={{ color: "black" }}>
          <h2 className="project-title" style={{ color: "black" }}>
            Contact Us
          </h2>
          <p
            className="project-description"
            style={{ color: "black !important" }}
          >
            Email: contact@carpentryservices.com
          </p>
          <p className="project-date" style={{ color: "black !important" }}>
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
