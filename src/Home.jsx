import "./home.css";
import { Button } from "./Button";
import { Typewriter } from "react-simple-typewriter";
//import $ from "jquery";
//import Blast from "blast-vanilla";
//import BouncingText from "react-bouncing-text";

const handleDone = () => {};



export function Home() {
  return (
    <div className="Home">
      <div className="textZone">
        <h1 className="centerText">
          <p>
            <Typewriter words={["Hola"]} typeSpeed={50} />
          </p>
          <p>
            <Typewriter
              words={["", "Soy Carlos!"]}
              delaySpeed={450}
              typeSpeed={50}
            />
          </p>
          <p>
            <Typewriter
              words={["", "Tu desarrollador de confianza."]}
              delaySpeed={1500}
              typeSpeed={50}
              loop={1}
              onLoopDone={handleDone}
            />
          </p>
        </h1>
        <h1 id="vva" className="">
          <Typewriter
            words={["Front End", "Desktop", "Android"]}
            delaySpeed={500}
            loop={true}
          />{" "}
          Developer
        </h1>
        <Button title="Contactame!" btnTipe="btn btn-outline-success" size="13rem"/>
      </div>
    </div>
  );
}

