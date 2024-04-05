import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

export function Sobre () {
  return (
    <div id='home'>
      <Link to="/">Pagina Inicial</Link>
        <Link to="/home">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/form">Form</Link>
    </div>
  );
}