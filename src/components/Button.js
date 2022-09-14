import PropTypes from "prop-types";

function Button({ label, backgroundColor = "red", size = "md", handleClick }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

// NOTE: 프로토타입으로 타입이랑 controls값이 정의된다.
// NOTE: 아마 Ts일 경우 type 이나 interface를 따라갈듯
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
