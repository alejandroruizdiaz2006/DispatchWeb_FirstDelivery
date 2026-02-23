import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Navegación</h4>
          <Link to="/home">Inicio</Link>
          <Link to="/characters">Wiki</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/rss">Canal RSS</Link>
        </div>

        <div className="footer-section">
          <h4>Proyecto</h4>
          <a href="https://github.com/alejandroruizdiaz2006/DispatchWeb_FirstDelivery" target="_blank" rel="noopener noreferrer">
            Repositorio GitHub
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            Inspiración en Figma
          </a>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">💬 Discord</a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <p>© 2024 Dispatch Fan Project. Todos los derechos reservados.</p>
        <p>
          <a href="/privacidad">Política de Privacidad y Cookies</a> | <a href="/condiciones">Condiciones de Venta</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;