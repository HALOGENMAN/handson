import "./App.css";
import FormComponent from "./components/FormComponent/FormComponent.jsx";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>
          Form Validation <span className="star"> *</span>
        </h1>
      </div>
      <FormComponent />
    </div>
  );
}

export default App;
