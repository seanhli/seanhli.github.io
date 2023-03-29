import { useDispatch } from "react-redux";
import { toggleExiting, changeNextPage } from "./store/exitAnimationSlice";

function Pager(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="pager-container">
        <span
          onClick={() => {
            dispatch(toggleExiting(true));
            dispatch(changeNextPage(props.prev));
          }}
        >
          prev
        </span>{" "}
        |{" "}
        <span
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

export default Pager;
