import { useState } from 'react';
import imagem from "../../assets/chique.png";
import './styles.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    <img src={imagem} className="navbar-logo" alt="Classe Chique Logo" />
                    <span className="navbar-title">Classe Chique</span>
                </a>

                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Menu">
                    <span className="sr-only">Abrir menu principal</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li><a href="#" className="navbar1-link">Home</a></li>
                        <li><a href="#planos-section" className="navbar1-link">Planos</a></li>
                        <li><a href="#" className="navbar1-link">Sobre</a></li>
                        <li><a href="#" className="navbar1-link">Serviços</a></li>
                        <li><a href="#" className="navbar1-link">Contato</a></li>
                    </ul>
                    <button className="navbar-button">Começar Agora</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;