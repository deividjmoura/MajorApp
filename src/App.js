import React, { useState } from "react";
import EventsList from "../src/components/EventsList";
import "./styles.css";

export default function App() {
  const [showEventsList, setShowEventsList] = useState(false);

  return (
    <div className="App">
      <h1>Entre na noite</h1>
      <h2>e descubra</h2>
      <p>seu lugar favorito para brilhar!</p>
      <div className="link-list">
        <h3>Confira:</h3>
        <ul>
          <li>
            <a href="#" onClick={() => setShowEventsList(!showEventsList)}>
              Agenda
            </a>
            {showEventsList && <EventsList />}{" "}
            {/* Renderizar EventsList somente se showEventsList for verdadeiro */}
          </li>
          <li>
            <a href="https://wa.me/554799033315">Reserve o espaço</a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1DUUOO2LkEKcen-98Gxd92tr8-SHJh04N?usp=sharing">
              Compartilhe!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
