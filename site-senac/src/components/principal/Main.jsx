import React, { useState } from 'react';
import './styles.css';
import textos from '../../content/textos.json';
import meuArquivo from "../../assets/guia.pdf";
import Chatbot from '../Chatbot/Chatbot';
import { UilArrowRight } from '@iconscout/react-unicons'

function Main() {
  
  return (
    <>
      <div id="container">
      <nav>
       <h1 id='titulo'>{textos['principal-titulo']}</h1>
       <h2 id='subtitulo'>{textos['principal-subtitulo']}</h2>
       <a id="botao1" href="">
       <button class="button is-link" >
        SAIBA MAIS
        <UilArrowRight size="35"/>
        </button>
        
       </a>
       {/* <a href={meuArquivo} download="guia.pdf">
       <button class="button is-link" >Download</button>
       </a> */}
       </nav>

       <Chatbot />
      </div>
    </>
  );
}

export default Main;
