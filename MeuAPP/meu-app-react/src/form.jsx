import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


export function Form () {
  return (
    <div id='home'>
        <Link to="/">Pagina Inicial</Link>
        <Link to="/home">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/form">Form</Link>
    </div>
  );
}

export function Formulario() {
  return (
    <div>
    <h2>Formulário de Contato</h2>

<form method="post">
    <label for="nome">Nome:</label><br/>
    <input type="text" id="nome" name="nome"/><br/>
    
    <label for="email">Email:</label><br/>
    <input type="email" id="email" name="email"/><br/>
    
    <label for="mensagem">Mensagem:</label><br/>
    <textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea><br/>
    
    <input type="submit" value="Enviar"/>

</form>

</div>
  )
}