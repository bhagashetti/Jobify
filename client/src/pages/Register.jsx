import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          name="name"
          labletext="Name"
          type="text"
          defaultValue="John"
        ></FormRow>
        <FormRow
          name="lastName"
          labletext="last name"
          type="text"
          defaultValue="Smith"
        ></FormRow>
        <FormRow
          name="location"
          labletext="location"
          type="text"
          defaultValue="earth"
        ></FormRow>
        <FormRow
          name="email"
          labletext="email"
          type="email"
          defaultValue="John@.com"
        ></FormRow>
        <FormRow
          name="password"
          labletext="password"
          type="password"
          defaultValue="scret"
        ></FormRow>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already member?
          <Link to="/login" className="member-btn">
            login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
