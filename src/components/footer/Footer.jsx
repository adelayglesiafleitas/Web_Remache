import "./Footer.css";
import Logo from "../../assets/stuf/logos/Remache_logo_negro.png";
import { Facebook, Youtube, Instagram } from "./Logo";

function Footer() {
  return (
    <footer className="container_footer" id="Contactos">
      <section className="container_contactos">
        <div className="container_info_1">
          <img src={Logo} alt="imagen del logo de remache" />
          <p>Imagen VIdeo Post 3D</p>
        </div>
        <div className="container_info_2">
          <p>remachestudio2009@gmail.com</p>
          <p>+53 5344 7436</p>
        </div>
      </section>
      <section className="container_contac">
        <div>
          <img src={Facebook} alt="logo de Facebook" />
          <img src={Youtube} alt="logo de Youtube" />
          <img src={Instagram} alt="logo de Instagram" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
