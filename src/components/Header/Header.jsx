import "./Header.css"
function Header() {
  return (
    <header>
      <nav aria-label="Navegação principal">
        <a href="/">Rastreando Pokémon</a>

        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="#pokemon">Pokémon</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

