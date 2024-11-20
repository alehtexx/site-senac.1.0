import React, { useState } from "react";
import { UilCommentsAlt } from '@iconscout/react-unicons'
import "./chatbot.css";

const Chatbot = () => {

  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };


  return (
    <>
     {/* Botão para abrir/fechar o Chatbot */}
     <button className="chat-toggle-btn" onClick={toggleChatbot} >
     <UilCommentsAlt size="40" color="#61DAFB" />
   </button>

   {/* Container do Chatbot */}
   {isChatbotVisible && (
     <div className="chatbot-container">
       <div className="chatbot-header">
         Chatbot
         <button
           className="modal-close is-large"
           onClick={toggleChatbot}
           aria-label="close"
         />
       </div>
       <div className="chatbot-messages">
         <div className="message is-info">
           <div className="message-body">Olá! Como posso ajudá-lo?</div>
           <FontAwesomeIcon icon="fa-solid fa-headset" shake />
         </div>
         <div className="message is-success">
           <div className="message-body">Olá! Gostaria de mais informações.</div>
         
         </div>
         {/* Mais mensagens podem ser adicionadas aqui */}
       </div>
       <div className="chatbot-input">
         <input type="text" className="input" placeholder="Digite sua mensagem..." />
         <button>Enviar</button>
       </div>
     </div>
   )}
   </>
  );
};

export default Chatbot;
