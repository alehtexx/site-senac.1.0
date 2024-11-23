import textos from '../../content/textos.json';
import textosCursos from '../../content/cursos.json'
import Card from '../card/Card';
import './styles.css';

const Cursos = () => {
    const txt = textosCursos.cursos;

    return (
        <section className="cursos-section">
            <div className="container-cursos">
                <h1 className="cursos-title animate__animated animate__fadeInDown">
                    CURSOS
                </h1>
                <div className="cursos-grid">
                    {txt.map((curso, index) => (
                        <div 
                            key={index}
                            className="animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Card
                                img={curso.imagem}
                                textos={curso}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cursos;
