import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
// import logo from "../assets/images/logo.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            I'm baby polaroid echo park single-origin coffee etsy narwhal.
            Tattooed tofu hammock man braid, neutral milk hotel photo booth
            marxism la croix plaid. YOLO artisan kinfolk marfa meh chartreuse,
            same offal direct trade man bun affogato flexitarian post-ironic
            cupping. Copper mug umami unicorn, vinyl jawn affogato cliche DSA
            photo booth godard heirloom trust fund. Meditation art party
            Brooklyn poutine YOLO literally vaporware four dollar toast
            gochujang bitters pitchfork. Echo park VHS whatever godard fixie
            yuccie irony photo booth yes plz pork belly.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="main" className="img main-img"></img>
      </div>
    </Wrapper>
  );
};

export default Landing;
