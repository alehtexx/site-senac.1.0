import React, { useState } from "react";
import { UilCommentsAlt } from '@iconscout/react-unicons'
import "./chatbot.css";

const Chatbot = () => {

  const [isChatbotVisible, setChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Como posso ajudá-lo?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Adiciona mensagem do usuário
    setMessages([...messages, { type: 'user', text: inputMessage }]);
    
    // Simula resposta do bot após 1 segundo
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Obrigado por sua mensagem! Em breve um de nossos atendentes entrará em contato.'
      }]);
    }, 1000);

    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
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
         {messages.map((message, index) => (
           <div key={index} className={`message ${message.type}-message`}>
             <div className="message-body">{message.text}</div>
           </div>
         ))}
       </div>
       <div className="chatbot-input">
         <input
           type="text"
           value={inputMessage}
           onChange={(e) => setInputMessage(e.target.value)}
           onKeyPress={handleKeyPress}
           placeholder="Digite sua mensagem..."
         />
         <button className="send-button" onClick={handleSendMessage}>
           Enviar
         </button>
       </div>
     </div>
   )}
   </>
  );
};

export default Chatbot;
