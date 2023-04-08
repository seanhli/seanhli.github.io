import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";
import { projectsExitAnimation } from "../animations/projectsExit";
import Pager from "../pager";

function Projects() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextPage === "/projects/") {
      dispatch(toggleExiting());
    } else if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    const projectsExit = projectsExitAnimation(projects ? projects.length : 0);
    projectsExit.play();
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, projectsExit.duration() * 1000);
  }

  const projects = ["kanji life", "gamify it!", "soon-tm", "wordle with cats"];
  const projectHeader = {
    "kanji life": [
      "https://seanhli.github.io/kanji-memo/",
      "https://github.com/seanhli/kanji-memo",
      "JavaScript, CSS, React, Redux",
      "sole developer and designer",
    ],
    "gamify it!": [
      null,
      "https://gitlab.com/seanhli/gamify-it",
      "Python, JavaScript, CSS, FastAPI, PostgreSQL, React, Redux",
      "sole developer and designer",
    ],
    "soon-tm": [
      "https://ghost-busters.gitlab.io/soon-tm/",
      "https://gitlab.com/ghost-busters/soon-tm",
      "Python, JavaScript, CSS, FastAPI, PostgreSQL, React, OAuth",
      "developer in team of 4",
    ],
    "wordle with cats": [
      null,
      "https://github.com/seanhli/wordle-with-cats",
      "Python, Django, CSS",
      "sole developer and designer",
    ],
  };
  const projectContent = {
    "kanji life": [
      "an interactive flashcard & quiz web app for those interested in Japanese kanji/vocab",
      [
        "developed for former (myself!) and current students learning Japanese to have a quick, fun and interactive way of practicing",
        "streamlined API calls and performance scaling through the use of redux and RTK query",
        "implemented a fully functional, highly responsive drag-and-drop quiz interface",
        "currently looking to optimize for mobile interfaces and integrate with ANKI to store vocabulary that users have trouble with",
      ],
    ],
    "gamify it!": [
      "(in dev) a web app for users to gamify their tasks and customize their rewards",
      [
        "inspired by my former life designing and managing rewards programs",
        "designed to help users build habits around healthy goals that they set for themselves",
        "utilized FastAPI for a RESTful API backend and PostgreSQL for managing app data",
      ],
    ],
    "soon-tm": [
      "a web service enabling users to connect with friends and loved ones through scheduled reminders",
      [
        "created for all of us that need an extra reminder to tell our loved ones and friends that we miss them",
        "combined FastAPI and PostgreSQL for complete RESTful API backends across 4 different microservices",
        "integrated with gmail to create a dedicated emailing microservice",
      ],
    ],
    "wordle with cats": [
      "an unlimited version of wordle with custom word length options",
      [
        "first major foray into building web apps with django",
        "used Django MVT architecture to build a local, customizable version of wordle which tracks user wordle history by difficulty level",
      ],
    ],
  };

  return (
    <>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project-card" key={`proj-${project}`}>
              <div className="project-card-header">
                {project} |{" "}
                {projectHeader[project][0] && (
                  <>
                    <a
                      href={projectHeader[project][0]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>{" "}
                    |{" "}
                  </>
                )}
                <a
                  href={projectHeader[project][1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  repo
                </a>{" "}
                | <span>{projectHeader[project][3]}</span>
              </div>
              <div className="project-card-content">
                <div className="project-card-tech">
                  {projectHeader[project][2]}
                </div>
                <div className="project-card-description">
                  {projectContent[project][0]}
                </div>
                {projectContent[project][1].map((item) => {
                  return (
                    <li key={`li-${item}`}>
                      <span className="li-text">{item}</span>
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Pager prev='/experiences/' next='/contact-me/'/>
    </>
  );
}

export default Projects;
