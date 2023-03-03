import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import UndoRedo from "./Component/UndoRedo";
import Calculator from "./Component/Calculator";
import MyCart from "./Component/MyCart/index";

const App = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: "bold",
      padding: "16px",
      margin: "10px",
      borderRadius: "17px",
      backgroundColor: isActive ? "green" : "black",
    };
  };
  return (
    <div className="App">
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <NavLink to="/" style={navLinkStyles}>
          MyCart
        </NavLink>
        <NavLink to="/calculator" style={navLinkStyles}>
          calculator
        </NavLink>
        <NavLink to="/undoredo" style={navLinkStyles}>
          UndoRedo
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<MyCart />} />
        <Route
          path="/calculator"
          element={
            <div className="calculator">
              <Calculator />
            </div>
          }
        />
        <Route path="/undoredo" element={<UndoRedo />} />
      </Routes>
    </div>
  );
};

export default App;
