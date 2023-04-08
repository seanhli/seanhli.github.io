import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { contactExitAnimation } from "../animations/contactExit";
import Pager from "../pager";

function ContactMe() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/contact-me/") {
      dispatch(toggleExiting());
    } else if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    const contactExit = contactExitAnimation();
    contactExit.play();
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, contactExit.duration() * 1000);
  }

  return (
    <>
      <div className="contact-page">
        <img
          className="cm-cat-paw"
          src={require(`../assets/dark-paw-back.png`)}
          alt="paw"
        />
        <div className="contact-container">
          <div className="contact-title">contact me</div>
          <div className="contact-content">
            email: &nbsp; contact.sean.h.li@gmail.com{" "}
            <img
              className="email-clipboard"
              src={require(`../assets/clipboard.png`)}
              alt="copy-email"
              title="copy email to clipboard"
              onClick={() => {
                navigator.clipboard.writeText("contact.sean.h.li@gmail.com");
              }}
            />
            <br />
            linkedin: &nbsp;{" "}
            <a
              href="http://linkedin.com/in/sean-h-li"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sean-h-li
            </a>
          </div>
        </div>
        <img
          className="cm-cat-paw-2"
          src={require(`../assets/grey-paw-back.png`)}
          alt="paw"
        />
      </div>
      <Pager prev='/cat/projects/' next='/'/>
    </>
  );
}

export default ContactMe;
