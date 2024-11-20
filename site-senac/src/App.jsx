
import './App.css'
import Main from './components/principal/Main'
import Navbar from './components/navbar/Navbar'
import Rodape from './components/rodape/Rodape'
import Sobre from './components/sobre/Sobre'
import Cursos from './components/cursos/Cursos'
import Planos from './components/planos/Planos'
import Forms from './components/forms/Forms'

function App() {

  return (
    <>
    <Navbar />
    <Main />
    <Sobre />
    <Cursos />
    <Planos />
    <Forms />
    <Rodape />
    </>
  )
}

export default App
