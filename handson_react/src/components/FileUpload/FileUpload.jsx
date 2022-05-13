import "./fileUpload.css";
import { useSelector, useDispatch } from "react-redux";
import { validationAction } from "../../store/index";

const FileUpload = (props) => {
  const dispach = useDispatch();
  const message = useSelector((state) => state.validation.File_Valid);
  const File_Check = useSelector((state) => state.validation.File_Check);
  const onChangeHandler = (e) => {
    dispach(validationAction.AFileUpload(e.target.value));
  };
  return (
    <>
      <div className="fileUpload">
        <h2>Upload Profile</h2>
        <div className={message ? "File_Custom-inp Fred" : "File_Custom-inp"}>
          <input type="file" value={File_Check} onChange={onChangeHandler} />
        </div>
      </div>
      <label className={message ? "inputLable " : "inpNone"}>{message}</label>
    </>
  );
};

export default FileUpload;
