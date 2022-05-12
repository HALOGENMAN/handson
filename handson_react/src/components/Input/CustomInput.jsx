import "./input.css";
import { useDispatch } from "react-redux";

const CustomInput = (props) => {
  const dispach = useDispatch();
  const inputChangeHandler = (e) => {
    dispach(props.dispachFunction(e.target.value));
  };
  const message = props.errorMessage;
  return (
    <>
      <input
        className={message ? "Custom-inp red" : "Custom-inp"}
        placeholder={props.placeHolder}
        type="text"
        onChange={inputChangeHandler}
        value={props.value}
      />
      <label className={message ? "inputLable " : "inpNone"}>{message}</label>
    </>
  );
};

export default CustomInput;
