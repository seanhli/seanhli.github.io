function Footer() {
  return (
    <div className="footer">
      <div className="footer-item">
        <a href="https://github.com/seanhli">
          <img
            src={require("./assets/github-icon.png")}
            alt="github"
            className="footer-icon"
          />
        </a>
      </div>
      <div className="footer-item">
        <a href="https://gitlab.com/seanhli">
          <img
            src={require("./assets/gitlab-icon.png")}
            alt="gitlab"
            className="footer-icon"
          />
        </a>
      </div>
      <div className="footer-item">
        <a href="www.linkedin.com/in/sean-h-li">
          <img
            src={require("./assets/linkedin-icon.png")}
            alt="linkedin"
            className="footer-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
