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

  return <>projects</>;
}

export default Projects
