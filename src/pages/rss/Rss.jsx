import './Rss.css';

function Rss() {
  return (
    <section className="rss-page">
      <h1>Noticias de Dispatch (RSS)</h1>
      <p>Suscríbete a nuestro canal de emergencias para recibir alertas en tiempo real.</p>
      
      <div className="rss-container">
        <a 
          href="https://feeds.bbci.co.uk/news/world/rss.xml" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rss-button"
        >
          Canal RSS de Emergencias Globales
        </a>
      </div>
    </section>
  );
}

export default Rss;