import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const commonLinkStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  padding: 11px 0px;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4; /* 137.5% */
  border-radius: 5px;
`;

export const NavAuthContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavAuthLink = styled(NavLink)`
  ${commonLinkStyles}
  color: #B29F7E;
  background-color: transparent;
  border: 1px solid #b29f7e;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* &.active {
    color: #e84a5f;
  } */
  &:hover,
  &:focus {
    color: #fff;
    background-color: #b29f7e;
    border: 1px solid #b29f7e;
  }
`;

export const RegisterNavLink = styled(NavLink)`
  ${commonLinkStyles}
  color: #fff;
  background-color: #b29f7e;
  border: 1px solid #b29f7e;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #b29f7e;
    background-color: transparent;
    border: 1px solid #b29f7e;
  }
`;
