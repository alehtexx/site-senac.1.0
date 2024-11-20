import textos from '../../content/textos.json';
import textosCursos from '../../content/cursos.json'
import Card from '../card/Card';
import './styles.css';

const Cursos = () => {
    const txt = textosCursos.cursos;

    return (
        <section className="cursos-section">
            <div className="container-cursos">
                <h1 className="cursos-title">CURSOS</h1>
                <div className="cursos-grid">
                    {txt.map((curso, index) => (
                        <Card
                            key={index}
                            img={curso.imagem}
                            textos={curso}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cursos;
