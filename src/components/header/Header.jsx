import { Link } from "react-router-dom";
import titleHeaderLogo from "../../assets/title-header.svg";

function Header() {
  return (
    <header>
      <div>
        <link rel="stylesheet" href="" />
        <Link to="/">
            <img src={titleHeaderLogo} alt="title" />
        </Link>
      </div>
    </header>
  );
}

export default Header;