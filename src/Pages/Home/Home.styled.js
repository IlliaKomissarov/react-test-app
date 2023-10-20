import styled from "styled-components";
import MainBg from "../../assets/hero.png";
import { Link } from "react-router-dom";

export const StyledHero = styled.section`
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${MainBg});
  background-color: #172234;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    z-index: -1;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  height: 1024px;
  position: relative;
  z-index: 1;

  & h1 {
    color: #fff;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      font-size: 64px;
    }
  }

  & p {
    color: #fff;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.48px;
    margin-bottom: 30px;
    max-width: 76%;
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const StyledListSection = styled.section`
  padding: 50px 20px;
  background-color: #1d2e47;

  & h2 {
    color: #b29f7e;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 50px 80px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const StyledLi = styled.li`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 530px;
  }

  @media screen and (min-width: 1440px) {
    width: 630px;
  }
`;

export const StyledDealInfoWrap = styled.div`
  display: flex;
`;

export const StyledDealTextWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 60px;
  position: absolute;
  bottom: 20px;
  left: 14px;
  color: #fff;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    gap: 80px;
    font-size: 18px;
  }
`;

export const StyledDealName = styled.p`
  font-family: Merriweather;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const StyledAdditionalWrap = styled.div`
  display: flex;
  gap: 80px;

  @media screen and (min-width: 768px) {
    gap: 120px;
  }
`;

export const StyledBottomMargin = styled.p`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  padding: 10px 24px;
  align-items: center;
  color: #fff;
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;
  border-radius: 8px;
  border: 1px solid #fff;
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
