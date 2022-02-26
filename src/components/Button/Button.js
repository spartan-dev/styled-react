import React from "react";
import ButtonStyled from "./Button.styled";
const Button = ({ primary, secondary, texto }) => {
  return (
    <>
      {primary ? (
        <ButtonStyled primary>{texto}</ButtonStyled>
      ) : (
        <ButtonStyled secondary>{texto}</ButtonStyled>
      )}
    </>
  );
};

export default Button;
