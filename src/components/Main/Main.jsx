import { useEffect, useState } from "react";
import axios from "axios";
import "./Main.css";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        setPokemons(resposta.data.results);
      } catch (error) {
        console.error("Erro ao buscar os Pokémon:", error);
      }
    }

    buscarPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <main>
      <section aria-labelledby="titulo-central">
        <header>
          <h1 id="titulo-central">Central de Captura</h1>

          <p>
            Encontre informações sobre seus Pokémon favoritos.
          </p>
        </header>

        <form>
          <label htmlFor="busca-pokemon">
            Buscar Pokémon
          </label>

          <input
            type="search"
            id="busca-pokemon"
            name="pokemon"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Digite o nome do Pokémon"
          />

          <button type="submit">
            Buscar
          </button>
        </form>

        <section aria-labelledby="resultados-pokemon">
          <h2 id="resultados-pokemon">
            Pokémon encontrados
          </h2>

          <div>
            {pokemonsFiltrados.map((pokemon) => (
              <article key={pokemon.name}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.url.split("/")[6]
                  }.png`}
                  alt={`Imagem do Pokémon ${pokemon.name}`}
                />

                <h3>{pokemon.name}</h3>
              </article>
            ))}
          </div>

          {pokemonsFiltrados.length === 0 && (
            <p>Nenhum Pokémon encontrado.</p>
          )}
        </section>
      </section>
    </main>
  );
}

export default Main;

