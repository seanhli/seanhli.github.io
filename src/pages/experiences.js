import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleExiting } from "../store/exitAnimationSlice";

function Experiences() {
  const exiting = useSelector((state) => state.exitAnimationSlice.exiting);
  const nextPage = useSelector((state) => state.exitAnimationSlice.nextPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (exiting) {
      exit(nextPage);
    }
  }, [exiting]); // eslint-disable-line

  function exit(path) {
    setTimeout(() => {
      dispatch(toggleExiting());
      navigate(path);
    }, 0 * 1000);
  }

  const content = [
    ["Hack Reactor", "stuff", "2022"],
    ["Advertise Purple", "stuff", "2021 - 2022"],
    ["SessionM / Mastercard", "stuff", "2017 - 2021"],
    ["Dartmouth College", "stuff", "2013 - 2017"],
  ];

  const detailContent = {
    "Hack Reactor": ["2022", [1, 2, 3, 4]],
    "Advertise Purple": ["2021 - 2022", [1, 2, 3, 4]],
    "SessionM / Mastercard": ["2017 - 2021", [1, 2, 3, 4]],
    "Dartmouth College": ["2013 - 2017", [1, 2, 3, 4]],
  };

  return (
    <>
      <div className="exp-board">
        {content.map((tcd) => {
          return (
            <div
              className="exp-post"
              onClick={() => {
                setFocus(tcd[0]);
              }}
            >
              <div className="exp-post-title">{tcd[0]}</div>
              <div className="exp-post-date">{tcd[2]}</div>
              <div className="exp-post-content">{tcd[1]}</div>
            </div>
          );
        })}
      </div>
      <div className="learn-more">click a note to learn more</div>
      {focus && (
        <div
          className="focus-bg"
          onClick={() => {
            setFocus(false);
          }}
        >
          <div className="focus-card">
            <div className="exp-d-post-title">{focus}</div>
            <div className="exp-d-post-date">{detailContent[focus][0]}</div>
            <div className="exp-d-post-content">
              {detailContent[focus][1].map((item) => {
                return <li>{item}</li>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Experiences;
