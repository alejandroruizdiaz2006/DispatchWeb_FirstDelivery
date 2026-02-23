import { teamZ, dispatchNetwork, villains } from '../../data/characters';
import './Characters.css';

function Characters() {
  const allCharacters = [...teamZ, ...dispatchNetwork, ...villains];

  return (
    <section className="characters-page">
      <h1>Dispatch Wiki - Base de Datos Completa</h1>

      {allCharacters.map(character => (
        <article key={character.id} className="wiki-card">
          <h2>{character.name}</h2>
          <p><strong>Rol:</strong> {character.role}</p>
          <p>{character.description}</p>
        </article>
      ))}
    </section>
  );
}

export default Characters;