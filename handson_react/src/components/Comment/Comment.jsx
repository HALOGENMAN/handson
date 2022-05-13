import { useSelector, useDispatch } from "react-redux";
import { validationAction } from "../../store/index";
const Comment = () => {
  const dispach = useDispatch();
  const inputChangeHandler = (e) => {
    dispach(validationAction.AComment(e.target.value));
  };
  const message = useSelector((state) => state.validation.Comment_Valid);
  return (
    <>
      <textarea
        className={message ? "Custom-inp red" : "Custom-inp"}
        placeholder="Comments"
        type="textarea"
        onChange={inputChangeHandler}
        rows="5"
      />
      <label className={message ? "inputLable " : "inpNone"}>{message}</label>
    </>
  );
};

export default Comment;
