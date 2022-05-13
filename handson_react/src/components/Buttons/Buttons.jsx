import "./button.css";
import { useDispatch, useSelector } from "react-redux";
import { validationAction } from "../../store/index";
const Buttons = (props) => {
  const diapach = useDispatch();
  const resetHandler = (e) => {
    diapach(validationAction.AName(""));
    diapach(validationAction.AID(""));
    diapach(validationAction.AProjectID(""));
    diapach(validationAction.AComment(""));
    diapach(validationAction.AFileUpload(""));
    diapach(validationAction.ALocation_select(0));
    diapach(
      validationAction.ASkillsEnter({ name: "distruct", check: "false" })
    );
  };

  const onSubmitHandler = (e) => {
    alert("Form is Valid");
  };

  const Name = useSelector((state) => state.validation.Associate_Name_valid);
  const AssociateID = useSelector(
    (state) => state.validation.Associate_ID_valid
  );
  const ProjectID = useSelector((state) => state.validation.Project_ID_valid);
  const Location = useSelector((state) => state.validation.Location_Valid);
  const Skills = useSelector((state) => state.validation.Skills_Valid);
  const File = useSelector((state) => state.validation.File_Valid);
  const Comment = useSelector((state) => state.validation.Comment_Valid);
  const Disabled =
    Name || AssociateID || ProjectID || Location || Skills || File || Comment;
  return (
    <div className="form_button">
      <button
        disabled={Disabled}
        onClick={onSubmitHandler}
        className={Disabled ? "common_btn Submit_diabled" : "common_btn Submit"}
      >
        Submit
      </button>
      <button className="common_btn Reset" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
