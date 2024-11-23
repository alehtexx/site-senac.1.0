import imagem from "../../assets/chique.png";
import './styles.css';

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
                        <li>
                            <a href="#" className="footer-link">Contato</a>
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