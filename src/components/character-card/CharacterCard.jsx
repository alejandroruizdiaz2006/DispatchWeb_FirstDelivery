import './CharacterCard.css';


function CharacterCard({ name, role, description, image }) {
  return (
    <article className="character-card">
      {image && <img src={image} alt={name} className="character-image" />}
      
      <div className="card-content">
        <h3>{name}</h3>
        <p className="character-role">{role}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default CharacterCard;