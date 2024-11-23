import React, { useState } from 'react';
import './styles.css';
import textos from '../../content/textos.json';
import Chatbot from '../Chatbot/Chatbot';
import { UilArrowRight } from '@iconscout/react-unicons'
import img from '../../assets/frontal.png'

function Main() {
  
  return (
    <>
      <div id="container">
      <nav id='nav-principal'>
       <h1 id='titulo' className="animate__animated animate__fadeInLeft">
        {textos['principal-titulo']}
       </h1>
       <h2 id='subtitulo' className="animate__animated animate__fadeInLeft animate__delay-1s">
        {textos['principal-subtitulo']}
       </h2>
       <a id="botao1" href="">
       <button className="button is-link animate__animated animate__fadeInUp animate__delay-2s">
        SAIBA MAIS
        <UilArrowRight size="35"/>
        </button>
        
       </a>
       </nav>
<div id='principal-image'>
    <img src={img} id='frontal' alt="" />
</div>
       <Chatbot />
      </div>
    </>
  );
}


export default Main;
