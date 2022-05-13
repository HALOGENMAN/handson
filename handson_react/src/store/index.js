import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Associate_Name: "",
  Associate_Name_valid: "Pleace enter Associate Name",
  Associate_ID: "",
  Associate_ID_valid: "Pleace enter Associate ID",
  Project_ID: "",
  Project_ID_valid: "Pleace enter Project ID",
  Location_Value: "DEFAULT",
  Location_Valid: "Please select the location",
  Location_Type: 0,
  Skills_Names: [],
  Skills_Valid: "Please select Min 5 skills",
  File_Valid: "Please upload Profile Pictur",
  File_Check: "",
  Comment_Valid: "Please Enter Comments",
  Comment_Value: "",
};

const validation = createSlice({
  name: "validation",
  initialState,
  reducers: {
    AName(state, action) {
      const name = action.payload;
      const spacial = name
        .split("")
        .find((e) => e !== " " && (e < "a" || e > "z") && (e < "A" || e > "Z"));
      if (name === "") {
        state.Associate_Name_valid = "Pleace enter Associate Name";
      } else if (name.length < 5 || name.length > 30 || spacial) {
        state.Associate_Name_valid =
          "Accepts Alphabets, space & Min 5 to Max 30 Char";
      } else {
        state.Associate_Name_valid = "";
      }
      state.Associate_Name = name;
    },
    AID(state, action) {
      const name = action.payload.trim();
      const spacial = name.split("").find((e) => e < "0" || e > "9");
      if (name === "") {
        state.Associate_ID_valid = "Pleace enter Associate ID";
      } else if (name.length !== 6 || spacial) {
        state.Associate_ID_valid = "Invalid Associate Id";
      } else {
        state.Associate_ID_valid = "";
      }
      state.Associate_ID = name;
    },
    AProjectID(state, action) {
      const name = action.payload.trim();
      const spacial = name
        .split("")
        .find(
          (e) =>
            (e < "0" || e > "9") && (e < "a" || e > "z") && (e < "A" || e > "Z")
        );
      if (name === "") {
        state.Project_ID_valid = "Pleace enter  Project ID";
      } else if (name.length !== 12 || spacial) {
        state.Project_ID_valid = "Invalid Project Id";
      } else {
        state.Project_ID_valid = "";
      }
      state.Project_ID = name;
    },
    ALocation_select(state, action) {
      const name = action.payload;
      if (name === 0) {
        state.Location_Type = 0;
        state.Location_Value = "DEFAULT";
        state.Location_Valid = "Please select the location";
      } else {
        state.Location_Type = name;
      }
    },
    ALocation_Value(state, action) {
      const name = action.payload.trim();
      if (name === "") {
        state.Location_Valid = "Please select the location";
      } else {
        state.Location_Valid = "";
      }
      state.Location_Value = name;
    },
    ASkillsEnter(state, action) {
      const { name, check } = action.payload;
      if (name === "distruct") {
        state.Skills_Names = [];
      } else if (check === true) {
        state.Skills_Names.push(name);
      } else {
        state.Skills_Names = state.Skills_Names.filter((e) => e !== name);
      }
      if (state.Skills_Names.length < 5) {
        state.Skills_Valid = "Please select Min 5 skills";
      } else {
        state.Skills_Valid = "";
      }
    },
    AFileUpload(state, action) {
      const check = action.payload;
      if (check) {
        state.File_Check = check;
        state.File_Valid = "";
      } else {
        state.File_Check = "";
        state.File_Valid = "Please upload Profile Pictur";
      }
    },
    AComment(state, action) {
      const name = action.payload.trim();
      if (name === "") {
        state.Comment_Valid = "Please Enter Comments";
        state.Comment_Value = "";
      } else {
        state.Comment_Valid = "";
        state.Comment_Value = name;
      }
    },
  },
});

const store = configureStore({
  reducer: { validation: validation.reducer },
});

export const validationAction = validation.actions;

export default store;
