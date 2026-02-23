import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/ui/logo-dispatch.png'; 

import './Header.css';

function Header() {
  const { i18n } = useTranslation();

  return (
    <header className="main-header">
      <div className="header-logo">
        <img src={logo} alt="Dispatch Logo" className="logo-img" />
      </div>

      <nav className="header-nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/characters">Wiki</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/rss">RSS</NavLink>
      </nav>

      <div className="language-switch">
        <button onClick={() => i18n.changeLanguage('es')}>ES</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
    </header>
  );
}

export default Header;