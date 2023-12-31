import { NavAuthContainer, NavAuthLink } from "./NavAuth.styled";

const NavAuth = () => {
  return (
    <NavAuthContainer>
      <NavAuthLink to="/login">Log In</NavAuthLink>
      <NavAuthLink to="/register">Sign Up</NavAuthLink>
    </NavAuthContainer>
  );
};

export default NavAuth;
