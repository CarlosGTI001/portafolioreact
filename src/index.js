import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "./Nav";
import { Home } from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    
    <Nav />
    <Home />
    
  </>
);
