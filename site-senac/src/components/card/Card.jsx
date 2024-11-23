import './styles.css';

const Card = ({ img, textos }) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img id='img-card' src={img} alt={textos.nome} />
            </div>
            <div className="card-content">
                <h5 className="card-title">{textos.nome}</h5>
                <p className="card-description">{textos.descricao}</p>
                <a href="#" className="card-button">
                    Saiba mais
                    <svg 
                        className="w-3.5 h-3.5 ms-2" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 14 10"
                    >
                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Card;