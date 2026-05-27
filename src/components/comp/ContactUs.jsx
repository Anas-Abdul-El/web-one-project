import { useState } from "react";

// ContactUs component displays a contact form and company contact information
const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="text-muted fs-5">
            We would love to hear from you
          </p>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6">
          <h4 className="fw-bold mb-4">Get in Touch</h4>
          {submitted ? (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="How can we help?"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
          )}
        </div>
        <div className="col-lg-6">
          <h4 className="fw-bold mb-4">Contact Information</h4>
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-start mb-4">
                <div className="fs-4 me-3">&#128205;</div>
                <div>
                  <h6 className="fw-bold mb-1">Address</h6>
                  <p className="text-muted mb-0">
                    123 Modern Street, Suite 100
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <div className="fs-4 me-3">&#128222;</div>
                <div>
                  <h6 className="fw-bold mb-1">Phone</h6>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <div className="fs-4 me-3">&#9993;</div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">hello@autoelite.com</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <div className="fs-4 me-3">&#128338;</div>
                <div>
                  <h6 className="fw-bold mb-1">Business Hours</h6>
                  <p className="text-muted mb-0">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
