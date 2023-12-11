import React from "react";
import "./button.scss";
import { BUTTON_SIZES, BUTTON_STATES } from "../../constants/button";

const Button = ({
  children,
  type,
  onClick,
  buttonStyle='btnPrimary',
  buttonSize="btnMedium",
}: {
  children?: any;
  type?: any;
  onClick?: any;
  buttonStyle: string;
  buttonSize: string;
}) => {
  const checkButtonStyle = BUTTON_STATES[buttonStyle]
    ? buttonStyle
    : BUTTON_STATES["btnPrimary"];

  const checkButtonSize = BUTTON_SIZES[buttonSize]
    ? buttonSize
    : BUTTON_SIZES["btnMedium"];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
