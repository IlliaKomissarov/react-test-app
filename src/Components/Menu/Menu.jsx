import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { StyledRegisterButton } from "./Menu.styled";

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledRegisterButton onClick={() => dispatch(logout())}>
        Sign Out
      </StyledRegisterButton>
    </>
  );
};

export default Menu;
