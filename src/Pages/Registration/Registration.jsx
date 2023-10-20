import { Form } from "../../Components/Forms/Forms";
import {
  StyledBgWrapper,
  StyledFormWrapper,
  StyledLoginSection,
} from "../LogIn/LogIn.styled";

const Registration = () => (
  <StyledLoginSection>
    <StyledBgWrapper />
    <StyledFormWrapper>
      <Form title="Registration" />
    </StyledFormWrapper>
  </StyledLoginSection>
);

export default Registration;
