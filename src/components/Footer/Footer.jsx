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
            href="https://github.com/topmiljm"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/james-topmiller123/"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <a
            href="https://www.linkedin.com/in/james-topmiller123/"
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