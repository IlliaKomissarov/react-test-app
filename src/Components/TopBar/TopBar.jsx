import { useSelector as select } from "react-redux";
import HiddenNav from "../NavAuth/NavAuth";
import CustomNav from "../Navigator/Navigator";
import Menu from "../Menu/Menu";
import { TopBar } from "./TopBar.styled";
import { selectIsLoggedIn as checkLoginStatus } from "../../redux/auth/selectors";

const NavigationBar = () => {
  const isAuthenticated = select(checkLoginStatus);

  return (
    <TopBar>
      <CustomNav />
      {isAuthenticated ? <Menu /> : <HiddenNav />}
    </TopBar>
  );
};

export default NavigationBar;
