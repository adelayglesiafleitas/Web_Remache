import "./CV.css";
import { Team } from "../../data/Team";
import close from "../../../assets/stuf/logos/close.png";

function CV({ worker, setCV }) {
  const handleClose = () => {
    setCV(false);
  };
  return (
    <section className="container_CV  ">
      <div className="container_CV_left animate__animated animate__bounceInLeft ">
        <h2 className="name_CV encode-sans-condensed-black ">
          EQUIPO REMACHESTUDIO
        </h2>
        <img src={Team[worker].imagen} alt={`imagen de ${Team[worker].name}`} />
      </div>
      <div className="container_CV_rigth animate__animated animate__bounceInRight">
        <p className="container_CV_rigth_name  encode-sans-condensed-black  ">
          {Team[worker].name}
        </p>
        <p className="container_CV_rigth_number  encode-sans-condensed-medium">
          {Team[worker].number}
        </p>
        <p className="container_CV_rigth_mail  encode-sans-condensed-black">
          {Team[worker].correo}
        </p>
        <p className="container_CV_rigth_CV  encode-sans-condensed-black">
          {Team[worker].cv}
        </p>
        <button className="container_CV_rigth_button" onClick={handleClose}>
          <img src={close} alt="imagen close" />
        </button>
      </div>
    </section>
  );
}

export default CV;
