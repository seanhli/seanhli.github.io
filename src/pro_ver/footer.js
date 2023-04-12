function MainFooter() {
  return (
    <>
      <div className="p-footer">
        <div className="p-footer-icons">
          <span className="p-footer-contact-info">contact me ⟶</span>
          <div className="p-footer-item">
            <img
              src={require("../assets/mail.png")}
              alt="email"
              title="copy email to clipboard"
              className="p-footer-icon"
              onClick={() => {
                navigator.clipboard.writeText("contact.sean.h.li@gmail.com");
                alert("email copied to clipboard")
              }}
            />
          </div>
          <div className="p-footer-item">
            <a
              href="https://github.com/seanhli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/github-icon.png")}
                alt="github"
                className="p-footer-icon"
              />
            </a>
          </div>
          <div className="p-footer-item">
            <a
              href="https://gitlab.com/seanhli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/gitlab-icon.png")}
                alt="github"
                className="p-footer-icon"
              />
            </a>
          </div>
          <div className="p-footer-item">
            <a
              href="https://www.linkedin.com/in/sean-h-li"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/linkedin-icon.png")}
                alt="github"
                className="p-footer-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
