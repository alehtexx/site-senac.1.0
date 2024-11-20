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
         <span>Chatbot</span>
         <button
           className="close-button"
           onClick={toggleChatbot}
           aria-label="close"
         >
           ×
         </button>
       </div>
       <div className="chatbot-messages">
         <div className="message bot-message">
           <div className="message-body">Olá! Como posso ajudá-lo?</div>
         </div>
         <div className="message user-message">
           <div className="message-body">Olá! Gostaria de mais informações.</div>
         </div>
       </div>
       <div className="chatbot-input">
         <input type="text" className="input" placeholder="Digite sua mensagem..." />
         <button className="send-button">Enviar</button>
       </div>
     </div>
   )}
   </>
  );
};

export default Chatbot;
