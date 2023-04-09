import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components/index";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page ">
        <div className="info">
          <h1>
            job <span> tracking </span> app
          </h1>
          <p>
            I'm baby ascot copper mug aesthetic umami hammock flannel cred poke.
            Cliche JOMO aesthetic, fingerstache ugh marfa XOXO narwhal.
            Gochujang tofu sriracha, quinoa roof party banjo marfa sartorial
            four loko gluten-free
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt="job hunt"
          className="img
        main-img"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
