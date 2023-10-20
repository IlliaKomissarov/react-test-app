import styled from "styled-components";
import logInBg from "../../assets/login.png";

export const StyledLoginSection = styled.section`
  display: flex;
`;

export const StyledBgWrapper = styled.div`
  width: 62%;
  height: 100vh;
  background-image: url(${logInBg});
  background-color: #172234;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledFormWrapper = styled.aside`
  padding-top: calc((100vh - 300px) / 2);
  padding-left: 7%;
  padding-right: 7%;
`;





