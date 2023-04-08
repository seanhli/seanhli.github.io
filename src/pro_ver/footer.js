function MainFooter() {
  return (
    <>
      <div className="p-footer">
        <div className="p-footer-contact">
            contact.sean.h.li@gmail.com
            <img
              className="p-email-clipboard"
              src={require(`../assets/clipboard.png`)}
              alt="copy-email"
              title="copy email to clipboard"
              onClick={() => {
                navigator.clipboard.writeText("contact.sean.h.li@gmail.com");
              }}
            />
        </div>
        <div className="p-footer-icons">
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
