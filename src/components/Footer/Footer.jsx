import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} James Topmiller
        </p>

        <div className="footer__links">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;