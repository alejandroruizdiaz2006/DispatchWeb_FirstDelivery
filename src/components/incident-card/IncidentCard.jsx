import './IncidentCard.css';

function IncidentCard({ title, status, description }) {
  return (
    <article className={`incident-card status-${status.toLowerCase()}`}>
      <h3>{title}</h3>
      <span className="incident-status">{status}</span>
      <p>{description}</p>
    </article>
  );
}

export default IncidentCard;