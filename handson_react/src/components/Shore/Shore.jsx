import "./shore.css";
import { useSelector, useDispatch } from "react-redux";
import { validationAction } from "../../store/index";

const Shore = (props) => {
  const locationType = useSelector((state) => state.validation.Location_Type);
  const message = useSelector((state) => state.validation.Location_Valid);
  const LocationValue = useSelector((state) => state.validation.Location_Value);
  const dispach = useDispatch();
  const getRadioVal = (e) => {
    dispach(validationAction.ALocation_select(Number(e.target.value)));
  };
  // const Default = LocationValue === "" ? "DEFAULT" : LocationValue;
  return (
    <>
      <div className="Shore_Container">
        <div>
          <input
            type="radio"
            className="drone"
            name="location"
            onChange={getRadioVal}
            value={"1"}
            checked={locationType === 1}
          />
          <label>Offshore</label>
        </div>

        <div>
          <input
            type="radio"
            className="drone"
            name="location"
            onChange={getRadioVal}
            value={"2"}
            checked={locationType === 2}
          />
          <label>Onshore</label>
        </div>
      </div>
      <div>
        <select
          defaultValue={LocationValue}
          onChange={(e) =>
            dispach(validationAction.ALocation_Value(e.target.value))
          }
          className={message ? "formSelect formSelect_red" : "formSelect"}
        >
          <option value={"DEFAULT"} disabled>
            Select Location
          </option>
          {locationType == 1 && (
            <>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Kochi">Kochi</option>
            </>
          )}

          {locationType == 2 && (
            <>
              <option value="US">US</option>
              <option value="Non_US">Non US</option>
            </>
          )}
        </select>
        <label className={message ? "shoreLable " : "ShoreNone"}>
          {message}
        </label>
      </div>
    </>
  );
};

export default Shore;
