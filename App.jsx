import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import image1 from './image1.jpg';
import image2 from './balls-decoration.png';

export function App () {
    return (
      <div id='home'>
          <Link to="/home">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/form">Form</Link>
      </div>
    );
  }
export function Image() {
  return (
    <section id='imagem'>
      <img src={image1} alt='ambiente'/>
      </section>
  )
}

export function Image2 () {
  return (
    <div id='imagem_bolinhas'>
    <section id='imagem2'>
      <img src={image2} alt='bolinhas'/>
    </section>
    </div>
  )
}

export function Paragrafo() {
  return (
<div id='text'>
      <h1>Ambientes <span>únicos</span> para você!!</h1>
      <p>Nós criamos ambientes exclusívos e únicos,
      com muito bom gosto e profissionalismo, investimos tempo e <span>dedicação no seu projeto</span>.
      </p>
      <p>Tenha <span>ambientes limpos</span> e bem decorados, transmitindo <strong>elegância  e finesse</strong> para 
      todo aquele que estiver ali.</p>
      </div>
  )
}

export function Rodape() {
  return (
<footer id='rodape'>
        <a href='https://instagram.com' target='_blank' rel="noreferrer"> Instagram </a>
        <a href='https://instagram.com' target='_blank' rel="noreferrer"> Fale Conosco </a>
      </footer>
  )
}

export function Line(){
  return (
    <div id='line'> 
    </div>
  )
}