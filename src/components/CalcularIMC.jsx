import React, { useState } from 'react'
import Forms from './Forms';
import "./CalcularIMC.module.css";

export default function CalcularIMC() {
  const [msg, setMsg] = useState('');

  function calcular({peso, altura}) {
    const alturaMetro = parseFloat(altura) / 100
    const imc = parseFloat(peso) / (alturaMetro * alturaMetro)
    let classificacao = ''

    if (imc < 18.5) {
      classificacao = "Baixo peso";
    } else if (imc >= 18.5 && imc <= 24.99) {
      classificacao = "Eutrofia (Peso adequado)";
    } else if (imc >= 25 && imc <= 29.99) {
      classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.99) {
      classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.99) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade extrema"
    }

    setMsg(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`)
  }

  return (
    <main>
      <div className="container">
        <Forms onSubmit={calcular} />
        <p>{msg}</p>
      </div>
    </main>
  );
}
