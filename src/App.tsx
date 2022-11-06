import * as React from "react";
import { Navbar, CardList } from "./components";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <CardList />
    </div>
  );
}
