import React from "react";
import CalcularIMC from "./components/CalcularIMC";
import Nome from "./components/Nome";
import "./App.css"

export default function App() {
  return (
    <>
      <header>
        <h1>Calculadora de IMC</h1>
      </header>
      <CalcularIMC />
      <Nome nome={"Juan da Silva Almeida"} />
    </>
  );
}
