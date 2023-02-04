import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";

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
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, 0 * 1000);
  }

  const projects = ["kanji life", "gamify it!", "soon-tm", "wordle with cats"];
  const projectHeader = {
    "kanji life": [
      "https://seanhli.github.io/kanji-memo/",
      "https://github.com/seanhli/kanji-memo",
    ],
    "gamify it!": [null, "https://gitlab.com/seanhli/gamify-it"],
    "soon-tm": [
      "https://ghost-busters.gitlab.io/soon-tm/",
      "https://gitlab.com/ghost-busters/soon-tm",
    ],
    "wordle with cats": [null, "https://github.com/seanhli/wordle-with-cats"],
  };
  const projectContent = {
    "kanji life": ["description",["1", "2"]],
    "gamify it!": ["description",["1", "2"]],
    "soon-tm": ["description",["1", "2"]],
    "wordle with cats": ["description",["1", "2"]],
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
                </a>
              </div>
              <div className="project-card-content">
                <div className="project-card-description">{projectContent[project][0]}</div>
                {projectContent[project][1].map((item) => {
                  return (
                    <li>
                      <span className="li-text">{item}</span>
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
