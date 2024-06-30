import "./Header.css";
import { headerObject } from "../data/ObjetHeader";
import Logo from "../../assets/stuf/logos/Remache_logo.png";

function Header() {
  /**erruta sin q salga en el url */
  const handlePos = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <div className="container_header">
        <div className="container_logo">
          <img src={Logo} alt="logo_Remache" />
        </div>
        <nav className="menu">
          <ul>
            {headerObject.map((item) => (
              <li className="shadowText " key={item.id}>
                <a
                  className="open_sans_400"
                  /*href={`#${item.type}`}*/
                  onClick={() => handlePos(item.type)}
                >
                  {item.type}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
