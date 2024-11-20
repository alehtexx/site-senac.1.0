import './styles.css';
import imagem from '../../assets/vendas.jpg'

const Card = ({ img, textos }) => {

    return (
        <>
        <div className="card">
                        <div className="card-image">
                            <img src={img} alt={textos.nome} />
                        </div>
                        <div className="card-content">
                            <p className="title">{textos.nome}</p>
                        </div>
                        </div>
        </>
    
    )}
    
    export default Card;