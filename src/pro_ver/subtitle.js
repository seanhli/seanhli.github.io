import { useDispatch } from "react-redux";
import { toggleExiting, changeNextPage } from "../store/exitAnimationSlice";

function Subtitle(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-subtitle">
        <span
          className="p-pager"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage(props.prev));
          }}
        >
          prev
        </span>{" "}
        |{" "}
        <span
          className="p-pager"
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage(props.next));
          }}
        >
          next
        </span>
      </div>
    </>
  );
}

export default Subtitle;
