import { Team } from "../../data/Team.js";
import "./Team.css";
function Crew({ setCV, setWorker }) {
  const handleSetCv = (index) => {
    setCV(true);
    setWorker(index);
    window.scrollTo(0, 0);
  };

  return (
    <section className="container_crew " id="Equipo">
      <div className="container_title">
        <h2 className="encode-sans-condensed-black title_2">
          EQUIPO REMACHESTUDIO
        </h2>
      </div>
      <div className="container_listTeam">
        {Team.map((item, index) => (
          <div
            className="container_info animate__animated animate__backInRight"
            key={item.id}
          >
            <div className="container_img ">
              <img
                className="img_worker "
                src={item.imagen}
                alt={`foto del trabajador${item.name}`}
                onClick={() => handleSetCv(index)}
              />
            </div>
            <div>
              <h3 className="encode-sans-condensed-black title_2">
                {item.name}
              </h3>
              <h4 className="encode-sans-condensed-regular ">
                {item.position}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crew;
