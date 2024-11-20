import textos from '../../content/textos.json';
import textosCursos from '../../content/cursos.json'
import Card from '../card/Card';
import './styles.css';

const Cursos = () => {
    const txt = textosCursos.cursos;
    console.log(txt)

    return (
        <>
            <div>
                <h1>CURSOS</h1>
                <div id="grid-container">
                    {txt.map((curso, index) => (
                        <Card
                        key={index}
                        id="grid-item"
                        img={curso.imagem}
                        textos={curso.nome}
                    />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Cursos;
