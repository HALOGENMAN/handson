import "./skills.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validationAction } from "../../store/index";

const Skills = () => {
  const dispach = useDispatch();
  const message = useSelector((state) => state.validation.Skills_Valid);
  const skillsName = useSelector((state) => state.validation.Skills_Names);
  const changeHandler = (e) => {
    dispach(
      validationAction.ASkillsEnter({
        name: e.target.value,
        check: e.target.checked,
      })
    );
  };
  return (
    <>
      <div className="skills_check">
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("HTML,CSS,JS") ? "HTML,CSS,JS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("HTML,CSS,JS") ? true : false}
          />
          <label className="label_skills">HTML,CSS,JS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Angular8") ? "Angular8" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Angular8") ? true : false}
          />
          <label className="label_skills">Angular 8</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Express_JS") ? "Express_JS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Express_JS") ? true : false}
          />
          <label className="label_skills">Express JS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("SASS") ? "SASS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("SASS") ? true : false}
          />
          <label className="label_skills">SASS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("React_JS") ? "React_JS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("React_JS") ? true : false}
          />
          <label className="label_skills">React JS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Node_JS") ? "Node_JS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Node_JS") ? true : false}
          />
          <label className="label_skills">Node JS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("ES5,ES6,ES7") ? "ES5,ES6,ES7" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("ES5,ES6,ES7") ? true : false}
          />
          <label className="label_skills">ES5,ES6,ES7...</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Mongo_DB") ? "Mongo_DB" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Mongo_DB") ? true : false}
          />
          <label className="label_skills">Mongo DB</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Bootstrap_4") ? "Bootstrap_4" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Bootstrap_4") ? true : false}
          />
          <label className="label_skills">Bootstrap 4</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("Vue_JS") ? "Vue_JS" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("Vue_JS") ? true : false}
          />
          <label className="label_skills">Vue JS</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={!skillsName.includes("TypeScript") ? "TypeScript" : ""}
            onChange={changeHandler}
            checked={skillsName.includes("TypeScript") ? true : false}
          />
          <label className="label_skills">TypeScript</label>
        </div>
      </div>
      <label className={message ? "inputLable " : "inpNone"}>{message}</label>
    </>
  );
};

export default Skills;
