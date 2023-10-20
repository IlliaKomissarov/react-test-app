import { CustomNavLink } from "../TopBar/TopBar.styled";
import MyLogoIcon from "../../assets/logo.svg";

const Navigator = () => {
  return (
    <nav>
      <CustomNavLink to="/">
        <img src={MyLogoIcon} alt="My Logo" />
      </CustomNavLink>
    </nav>
  );
};

export default Navigator;
