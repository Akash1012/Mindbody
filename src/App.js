import "./App.css";
import UndoRedo from "./Component/UndoRedo";
import Calculator from "./Component/Calculator";

const App = () => {
  return (
    <div className="App">
      {/* <div className="calculator">
        <Calculator />
      </div> */}
      <div>
        <UndoRedo />
      </div>
    </div>
  );
};

export default App;
