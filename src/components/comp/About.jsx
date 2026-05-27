// About component displays company information, mission statement, and team details
const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <h1 className="display-5 fw-bold">About AutoElite</h1>
          <p className="text-muted fs-5">
            Your trusted source for quality vehicles
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-6 mb-4">
          <h3 className="fw-bold">Our Story</h3>
          <p className="text-muted">
            Founded in 2024, AutoElite started with a simple mission: to make
            finding the perfect car simple and transparent. What began as a
            small dealership has grown into a trusted destination for
            thousands of customers nationwide.
          </p>
          <p className="text-muted">
            We carefully inspect every vehicle in our inventory, ensuring that
            each car meets our high standards for quality, performance, and
            reliability.
          </p>
        </div>
        <div className="col-lg-6 mb-4">
          <h3 className="fw-bold">Our Mission</h3>
          <p className="text-muted">
            We believe that everyone deserves a great car at a fair price. Our
            mission is to provide carefully selected vehicles that enhance
            your daily life, with financing options that make sense.
          </p>
          <p className="text-muted">
            We are committed to transparency, quality, and exceptional
            customer service in everything we do.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <h3 className="fw-bold mb-4">Why Choose Us</h3>
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-3">&#9981;</div>
              <h5 className="fw-bold">Certified Vehicles</h5>
              <p className="text-muted small mb-0">
                Every car passes a rigorous 150-point inspection
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-3">&#128176;</div>
              <h5 className="fw-bold">Best Price Guarantee</h5>
              <p className="text-muted small mb-0">
                Competitive pricing with no hidden fees
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body py-4">
              <div className="fs-1 mb-3">&#128664;</div>
              <h5 className="fw-bold">Test Drive Ready</h5>
              <p className="text-muted small mb-0">
                Schedule a test drive at your convenience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
