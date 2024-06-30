import "./Works.css";
import { datos } from "../../data/Works.js";
import { adelante, atras } from "../../data/Carousel.js";
import { useState } from "react";

function Works() {
  const [curretIndexWorks, setCurrentIndexWorks] = useState(0);
  const [curretPoint, setCurrentPoint] = useState(0);

  const handleNext = () => {
    const nextIndex = (curretIndexWorks + 3) % datos.length;
    const currentPoinset = (curretPoint + 1) % (datos.length / 3);
    setCurrentPoint(currentPoinset);
    setCurrentIndexWorks(nextIndex);
  };

  const handleBack = () => {
    let nextIndex = curretIndexWorks - 3 < 0 ? 0 : curretIndexWorks - 3; //valido si llega a cero
    const currentPoinset =
      curretIndexWorks - 3 < 0 ? 0 : (curretPoint - 1) % (datos.length / 3);
    setCurrentPoint(currentPoinset);
    setCurrentIndexWorks(nextIndex);
  };

  return (
    <section className="Trabajos " id="Trabajos">
      <div className="container_listTrabajos ">
        {datos.slice(curretIndexWorks, curretIndexWorks + 3).map((item) => (
          <div
            key={item.id}
            className="container_peliculas animate__animated animate__backInLeft "
          >
            <img
              className="container_peliculas_img "
              src={item.imagen}
              alt={`imagen de sexion ${item.type}`}
            />
            <div className="container_peliculas_texto">
              <h2 className=" animate__animated animate__backInLeft">
                {item.type}
              </h2>
              <h3 className=" animate__animated animate__backInLeft">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="container_button_Trabajos">
        <button
          className="button_Back button_Works_Back"
          onClick={() => {
            handleBack();
          }}
        >
          <img src={atras} alt="boton de atras " />
        </button>
        <button
          className="button_Next button_Works_Next "
          onClick={() => {
            handleNext();
          }}
        >
          <img src={adelante} alt="boton de adelante" />
        </button>
      </div>
      {
        <div className="container_list_Trabajos">
          {datos.slice(0, Math.ceil(datos.length / 3)).map((item, index) => (
            <div key={item}>
              <button
                className={
                  index === curretPoint ? "index_whithe" : "index_shadow"
                }
              ></button>
            </div>
          ))}
        </div>
      }
    </section>
  );
}

export default Works;
