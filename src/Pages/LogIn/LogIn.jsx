import { Form } from "../../Components/Forms/Forms";
import {
  StyledBgWrapper,
  StyledFormWrapper,
  StyledLoginSection,
} from "./LogIn.styled";

const Login = () => {
  return (
    <StyledLoginSection>
      <StyledBgWrapper />
      <StyledFormWrapper>
        <Form title="Login" />
      </StyledFormWrapper>
    </StyledLoginSection>
  );
};

export default Login;
