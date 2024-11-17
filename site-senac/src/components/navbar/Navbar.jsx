import imagem from "../../assets/chique.jpg";
import './styles.css';

function Navbar() {
    
    return (
      <>
     <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  
    <a  href="https://bulma.io">
    <img id="logo" src={imagem} alt="" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Pagina Inicial
      </a>

      <a class="navbar-item">
        Sobre nós
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Planos
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
        <button class="button is-link">Log in</button>
        </div>
      </div>
    </div>
  </div>
</nav>
      </>
    )
  }
  
  export default Navbar