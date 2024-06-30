import { useState, useEffect } from "react";
import { adelante, atras, Us } from "../../../data/Carousel.js";

import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // categoria1
  const [currentImg, setCurrentImg] = useState(0);
  const [urlImg, setUrlImg] = useState(Us[0].urlImagen[0]); //cambiar imagen

  console.log(currentIndex);

  /**para pasar de una categoria a otra button*/
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % Us.length;
    setCurrentIndex(nextIndex);
  };

  /**para pasar de una categoria a otra button*/
  const handleBack = () => {
    const nextIndex = currentIndex - 1 < 0 ? Us.length - 1 : currentIndex - 1; //valido si llega
    setCurrentIndex(nextIndex);
  };

  /**pasar imagenes*/
  const handleNextImage = () => {
    const nextIndex = (currentImg + 1) % Us[currentIndex].urlImagen.length;
    setUrlImg(Us[currentIndex].urlImagen[nextIndex]);
    setCurrentImg(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  return (
    <>
      {
        /**render por categoria */
        <div className="container_carousel_cut">
          <img
            className="animate__animated animate__fadeIn imagen_fondo"
            src={urlImg}
            alt="imagen de muetra de trabajos"
          />
        </div>
      }
      <div className="container_us_texto">
        <h2 className="open_sans_600">{Us[currentIndex].titulo}</h2>
        <h3 className="open_sans_200">{Us[currentIndex].texto}</h3>
      </div>
      <div className="container_button_point">
        <button
          className="button_Back"
          onClick={() => {
            handleBack();
          }}
        >
          <img src={atras} alt="" />
        </button>
        <button
          className="button_Next "
          onClick={() => {
            handleNext();
          }}
        >
          <img src={adelante} alt="" />
        </button>
        <div className="list_images">
          {Us.map((item, index) => (
            <div key={item}>
              <button
                className={index === currentIndex ? "index_whithe" : "index_shadow"}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
