import textos from '../../content/textos.json';
import imagem from '../../assets/vendas.jpg'
import './styles.css';

const Sobre = () => {

    return (
        <>
        <div id="container-sobre">
            <div id='nav'>

        <h1 id='sobre-titulo'>{textos['sobre-titulo']}</h1>
        <h2 id='sobre-texto'>{textos['sobre-texto']}</h2>
            </div>
        <img src={imagem} />
        </div>
        </>
    
    )}
    
    export default Sobre;