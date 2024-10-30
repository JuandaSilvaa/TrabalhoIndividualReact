import React, { useState } from "react";
import "./Forms.module.css";

export default function Forms({ onSubmit }) {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function calcularIMC(e) {
    e.preventDefault();
    onSubmit({ peso, altura });
  }

  return (
    <form onSubmit={calcularIMC}>
      <input
        type="number"
        name="peso"
        required
        placeholder="Peso em kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        name="altura"
        required
        placeholder="Altura em cm"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button type="submit">Calcular IMC</button>
    </form>
  );
}
