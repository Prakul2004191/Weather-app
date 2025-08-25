import React from "react";

const Button = (props) => {
  // handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.onClick();
    }
  };

  return (
    <button
      className="button"
      onClick={props.onClick}
      onKeyDown={handleKeyDown}   // 👈 added here
    >
      {props.value}
    </button>
  );
};

export default Button;
