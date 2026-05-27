// Footer component displays copyright and site branding at the bottom of every page
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-1 fw-bold">AutoElite</p>
        <p className="mb-0 small text-secondary">
          &copy; {currentYear} AutoElite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
