import CustomInput from "../Input/CustomInput";
import Shore from "../Shore/Shore";
import Skills from "../Skills/Skills";
import FileUpload from "../FileUpload/FileUpload";
import Comment from "../Comment/Comment";
import Buttons from "../Buttons/Buttons";

import { useSelector } from "react-redux";
import { validationAction } from "../../store/index";

const FormComponent = () => {
  const errorName = useSelector(
    (state) => state.validation.Associate_Name_valid
  );
  const Name = useSelector((state) => state.validation.Associate_Name);
  const errorId = useSelector((state) => state.validation.Associate_ID_valid);
  const ID = useSelector((state) => state.validation.Associate_ID);
  const errorProject = useSelector(
    (state) => state.validation.Project_ID_valid
  );
  const Project = useSelector((state) => state.validation.Project_ID);

  return (
    <>
      <CustomInput
        dispachFunction={validationAction.AName}
        placeHolder={"Associate Name"}
        errorMessage={errorName}
        value={Name}
      />
      <CustomInput
        dispachFunction={validationAction.AID}
        placeHolder={"Associate ID"}
        errorMessage={errorId}
        value={ID}
      />
      <CustomInput
        dispachFunction={validationAction.AProjectID}
        placeHolder={"Project ID"}
        errorMessage={errorProject}
        value={Project}
      />
      <Shore />
      <Skills />
      <FileUpload />
      <Comment />
      <Buttons />
    </>
  );
};

export default FormComponent;
