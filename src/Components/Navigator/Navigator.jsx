import { StyledLink } from "../TopBar/TopBar.styled";
import MyLogoIcon from "../assets/logo.svg";

const Navigator = () => {
  return (
    <nav>
      <StyledLink to="/">
        <img src={MyLogoIcon} alt="My Logo" />
      </StyledLink>
    </nav>
  );
};

export default Navigator;
