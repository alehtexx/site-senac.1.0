import React, { useState } from 'react';
import './styles.css';
import textos from '../../content/textos.json';
import meuArquivo from "../../assets/guia.pdf";
import imagem from "../../assets/persona.png";
import Chatbot from '../Chatbot/Chatbot';

function Main() {
  
  return (
    <>
      <div id="container">
      <nav>
       <h1 id='titulo'>{textos['principal-titulo']}</h1>
       <h2 id='subtitulo'>{textos['principal-subtitulo']}</h2>

       <a href={meuArquivo} download="guia.pdf">
       <button class="button is-link" >Download</button>
       </a>
       </nav>

      <img src={imagem} alt="" />

       <Chatbot />
      </div>
    </>
  );
}

export default Main;
