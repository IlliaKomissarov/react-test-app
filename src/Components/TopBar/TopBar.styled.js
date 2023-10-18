import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const TopBar = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  gap: 10px;
  align-items: center;
  padding: 10px 30px;
  background-color: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 480px) {
    flex-direction: row;
    padding: 10px 20px;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 80px;
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #b29f7e;
  }
  /* &.active {
    color: #e84a5f;
  } */
`;
