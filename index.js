import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Image, Paragrafo, Line, Rodape, Image2, App } from './App';
import { Home, Texto, Footer} from './home'
import * as functionSobre from './sobre';
import {Formulario} from './form';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Page() {
  return (
    <div>
      <App />
      <Image/>
      <Paragrafo/>
      <Line/>
      <Rodape/>
      <Image2/>
    </div>
  )
}
class Page1 extends Component{
  render(){
    return (
      <div>
        <Home/>
        <Texto/>
        <Footer/>
      </div>
    )
  }
}
class Page2 extends Component {
  render(){
  return (
    <div>
      <functionSobre.Sobre/>
    </div>
  )
}
}

class Page3 extends Component {
  render(){
  return (
    <div>
      <Formulario/>
    </div>
  )
}
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Page} />
            <Route path="/home" component={Page1} />
            <Route path="/sobre" component={Page2} />
            <Route path="/form" component={Page3} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
