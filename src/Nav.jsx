import "./nav.css";
import logo from "./img/CG.png";

export function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo}></img>
        <p className="name">Carlos</p>

      </div>
    </div>
  );
}
