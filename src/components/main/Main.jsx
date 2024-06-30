import Us from "./us/Us.jsx";
import Works from "./works/Works.jsx";
import Team from "../main/Team/Team.jsx";
import "./Main.css";
import { useState } from "react";
import CV from "./CV/CV.jsx";

function Main() {
  const [cV, setCV] = useState(false);
  const [worker, setWorker] = useState(0);
  return (
    <main>
      {cV ? (
        <CV worker={worker} setCV={setCV} />
      ) : (
        <>
          <Us />
          <Works />
          <Team setWorker={setWorker} setCV={setCV} />
        </>
      )}
    </main>
  );
}

export default Main;
