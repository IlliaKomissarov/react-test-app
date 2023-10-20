import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledButton,
  StyledForm,
  StyledLink,
  StyledP,
  StyledTitle,
} from "./Forms.styled";
import { login, register } from "../../redux/auth/operations";

// eslint-disable-next-line react/prop-types
const Form = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      email,
      password,
    };
    console.log(newUser);
    if (title === "Login") {
      dispatch(login(newUser));
    }
    if (title === "Register") {
      dispatch(register(newUser));
    }

    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="tel"
            name="password"
            value={password}
            placeholder="Password"
          />
        </label>
        {title === "Login" && (
          <StyledLink to="/password_restoring">Forgot password?</StyledLink>
        )}
        <StyledButton type="submit">
          {title === "Login" ? "Sign In" : "Sign Up"}
        </StyledButton>

        <StyledP>
          {title === "Login" ? (
            <>
              Don’t have account?{" "}
              <StyledLink to="/register">Sign Up</StyledLink>
            </>
          ) : (
            <>
              Already have account? <StyledLink to="/login">Sign In</StyledLink>
            </>
          )}
        </StyledP>
      </StyledForm>
    </>
  );
};

export { Form };
