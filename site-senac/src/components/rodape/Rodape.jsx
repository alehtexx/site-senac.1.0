import imagem from "../../assets/chique.png";
import './styles.css';
import { UilInstagramAlt } from '@iconscout/react-unicons'; 
import { UilYoutube } from '@iconscout/react-unicons'    
import { UilLinkedinAlt } from '@iconscout/react-unicons'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img 
                    src={imagem} 
                    className="footer-logo"
                    alt="Logo da empresa" 
                />
                <nav>
                    <div className="footer-icons">

                        
                        <UilInstagramAlt size="40" color="#61DAFB" />
                        <UilYoutube size="40" color="#61DAFB" />
                        <UilLinkedinAlt size="40" color="#61DAFB" />
                    </div> 
                    
                    <ul className="footer-links">
                        <li>
                            <a href="#" className="footer-link">Sobre</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Política de Privacidade</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Licença</a>
                        </li>
                            <a href="#" className="footer-link">Contato</a>
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer-copyright">
                <span>© 2024 Teste™. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}

export default Rodape;