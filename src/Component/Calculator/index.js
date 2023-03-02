import React, { useState } from "react";
import { evaluate } from "mathjs";
import classes from "./styles.module.css";
import Button from "./Button/Button";
import Input from "./Input";

const Calculator = () => {
  const sybColor = "#0c55c9";
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (value) => {
    setText((text) => [...text, value]);
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  return (
    <>
      <div className={classes.header}>
        <h1>Calculator</h1>
      </div>
      <div className={classes.cal}>
        <div className={classes["calc-wrapper"]}>
          <Input text={text} result={result} />
          <div className={classes.row}>
            <Button symbol={7} handleClick={addText} />
            <Button symbol={8} handleClick={addText} />
            <Button symbol={9} handleClick={addText} />
            <Button symbol={"/"} color={sybColor} handleClick={addText} />
          </div>
          <div className={classes.row}>
            <Button symbol={4} handleClick={addText} />
            <Button symbol={5} handleClick={addText} />
            <Button symbol={6} handleClick={addText} />
            <Button symbol={"*"} color={sybColor} />
          </div>
          <div className={classes.row}>
            <Button symbol={1} handleClick={addText} />
            <Button symbol={2} handleClick={addText} />
            <Button symbol={3} handleClick={addText} />
            <Button symbol={"+"} color={sybColor} handleClick={addText} />
          </div>
          <div className={classes.row}>
            <Button symbol={0} handleClick={addText} />
            <Button symbol={"."} handleClick={addText} />
            <Button symbol={"="} handleClick={calculateResult} />
            <Button symbol={"-"} color={sybColor} handleClick={addText} />
          </div>
          <Button symbol={"Clear"} color={"#ed5c64"} handleClick={resetInput} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
