import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Image from './fitness-jump.png'

export function Home () {
  return (
    <div id='home'>
      <Link to="/">Pagina Inicial</Link>
      <Link to="/home">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/form">Form</Link>
    </div>
  );
}


export function Texto() {
  return (

<div id='text-container'>

  <section id='text-fitness'>
      <h1>Treinos <span>exclusívos</span> para você!!</h1>
      <p>Nós criamos <strong>treinos exclusívos e únicos para você.</strong><br/>
      Invista no seu corpo e <strong>tenha muito mais performance</strong> e qualidade de vida. </p>

      <div id='button'>
      <button>Começe já</button>
    </div>
      </section>

      <section id='image'>
      <img  src={Image} alt='FitnessJump'/>
      </section>
      </div>
  )
}

export function Footer () {
  return (
<footer id='rodape'>
        <p>Fale conosco no instagram <strong>@exemplo</strong></p>
      </footer>
  )
}

