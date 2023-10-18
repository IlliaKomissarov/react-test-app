import { useSelector as select } from "react-redux";
import HiddenNav from "../NavAuth/NavAuth";
import CustomNav from "../Navigator/Navigator";
import PersonalMenu from "../UserMenu/UserMenu";
import { StyledTopBar } from "./TopBar.styled";
import { selectIsLoggedIn as checkLoginStatus } from "../../redux/auth/selectors";

const NavigationBar = () => {
  const isAuthenticated = select(checkLoginStatus);

  return (
    <StyledTopBar>
      <CustomNav />
      {isAuthenticated ? <PersonalMenu /> : <HiddenNav />}
    </StyledTopBar>
  );
};

export default NavigationBar;
