import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: #b29f7e;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6;
  margin-top: 10px;
  text-align: end;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 200px;
  flex-direction: column;

  & input {
    padding: 8px;
    font-family: inherit;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    background-color: #e0e0e0;
    padding: 17px 20px;
  }

  & input::placeholder {
    color: rgb(23, 34, 52, 0.5);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  & label {
    color: #000;
    font-family: Merriweather;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  margin-top: 30px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #b29f7e;
  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 5px;
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

export const StyledP = styled.p`
  padding-top: 10px;
  color: var(--Text, #172234);
  text-align: center;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.6;
`;

export const StyledTitle = styled.h1`
  color: #172234;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
`;
