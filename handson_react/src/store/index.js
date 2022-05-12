import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Associate_Name: "",
  Associate_Name_valid: "Pleace enter Associate Name",
  Associate_ID: "",
  Associate_ID_valid: "Pleace enter Associate ID",
  Associate_ID: "",
  Associate_ID_valid: "Pleace enter Associate ID",
  Project_ID: "",
  Project_ID_valid: "Pleace enter Project ID",
};

const validation = createSlice({
  name: "validation",
  initialState,
  reducers: {
    AName(state, action) {
      const name = action.payload.trim();
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
      const spacial = name.split("").find((e) => e < "0" && e > "9");
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
  },
});

const store = configureStore({
  reducer: { validation: validation.reducer },
});

export const validationAction = validation.actions;

export default store;
