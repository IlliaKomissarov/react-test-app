import styled from "styled-components";
import { commonLinkStyles } from "../../Components/NavAuth/NavAuth.styled";

export const StyledRegisterButton = styled.button`
  ${commonLinkStyles}
  color: #fff;
  background-color: #b29f7e;
  border: 1px solid #b29f7e;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    border 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #b29f7e;
    background-color: transparent;
    border: 1px solid #b29f7e;
  }
`;
