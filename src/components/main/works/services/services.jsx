import { useState } from "react";
import { datos } from "../../../data/Works.js";

function Services() {
  const [currentIndexWorks, setCurrentIndexWorks] = useState(0);
  const [currentPoint, setCurrentPoint] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndexWorks + 3) % datos.length;
    const currentPoinset = (currentPoint + 1) % (datos.length / 3);
    setCurrentPoint(currentPoinset);
    setCurrentIndexWorks(nextIndex);
  };

  const handleBack = () => {
    const nextIndex = Math.max(0, currentIndexWorks - 3);
    const currentPoinset = Math.max(0, (currentPoint - 1) % (datos.length / 3));
    setCurrentPoint(currentPoinset);
    setCurrentIndexWorks(nextIndex);
  };

  return { currentPoint, currentIndexWorks, handleNext, handleBack };
}

export default Services;
