import React, { useEffect } from "react";

const Button = (props) => {
  // Listen for Enter key globally
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        props.onClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props]);

  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
