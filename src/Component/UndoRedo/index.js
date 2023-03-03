import { useEffect, useState } from "react";
import classes from "./style.module.css";

const UndoRedo = () => {
  const [saveInputValue, setSaveInputValue] = useState("");
  const [forUndo, setForUndo] = useState([]);
  const [forRedo, setForRedo] = useState([]);
  const [manageCountrForUndoRedo, setManageCountrForUndoRedo] = useState(0);
  const [checkWhenRedoCall, setCheckWhenRedoCall] = useState(false);

  const saveInput = (e) => {
    setSaveInputValue(e.target.value);
    let temp = e.target.value;
    let x = [...temp];
    setForUndo(x);
  };

  useEffect(() => {
    if (checkWhenRedoCall) {
      const convertToString = forUndo.join("");
      setSaveInputValue(convertToString);
    }
  }, [forUndo]);

  useEffect(() => {
    if (forUndo.length >= 1 && forRedo.length >= 1) {
      setManageCountrForUndoRedo(
        (manageCountrForUndoRedo) => manageCountrForUndoRedo + 1
      );
    }
  }, [forUndo, forRedo]);

  const undo = () => {
    let temp = forUndo;
    if (temp.length === 0) {
      setForUndo([]);
    } else {
      if (manageCountrForUndoRedo >= 10) {
        alert("Limit is crossed please reset");
        return;
      }
      const remove = temp.pop();
      const convertToString = temp.join("");
      setSaveInputValue(convertToString);
      setForRedo((prev) => [remove, ...prev]);
      setCheckWhenRedoCall(false);
    }
  };
  const redo = () => {
    if (manageCountrForUndoRedo >= 10) {
      alert("Limit is crossed please reset");
      return;
    }
    let temp = forRedo;
    const remove = temp.shift();
    setForUndo((prev) => [...prev, remove]);
    setCheckWhenRedoCall(true);
  };

  const reset = () => {
    setForUndo([]);
    setForRedo([]);
    setManageCountrForUndoRedo(0);
    setCheckWhenRedoCall(false);
    setSaveInputValue("");
  };

  return (
    <div className={classes.container}>
      <h3>UNDO AND REDO</h3>
      <div className={classes.input}>
        <input
          onChange={saveInput}
          value={saveInputValue}
          className={classes.innerInput}
        />
      </div>

      <div className="btnContainer">
        <button className={classes.btn} onClick={undo}>
          UNDO
        </button>
        <button className={classes.btn} onClick={redo}>
          REDO
        </button>
        <button className={classes.btn} onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default UndoRedo;
