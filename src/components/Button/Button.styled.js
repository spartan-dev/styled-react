import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;

  ${(props) =>
    props.primary &&
    `
   background-color:#F8F8F8;
  color: #730D12;
  `}
  ${(props) =>
    props.secondary &&
    `
   background-color:#D8272F
;
  color: #FFFFFF
;
  `}
  margin-left:2em;
  border-radius: 8px;
  width: 192px;
  height: 56px;

  &:hover {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
  }
`;

export default ButtonStyled;
