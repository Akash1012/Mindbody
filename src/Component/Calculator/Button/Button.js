import classes from "./button.module.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      style={{ backgroundColor: color }}
      className={classes["button-wrapper"]}
    >
      {symbol}
    </div>
  );
};

export default Button;
