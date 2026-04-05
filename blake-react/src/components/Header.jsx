import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className="header">
      <div className="fixing">
        <div className="container">
          <div className="menu-container">
            <div className="menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
              <img 
                src={menuOpen ? '/img/close.png' : '/img/menu.black.png'} 
                alt="Меню" 
                id="menu-img" 
              />
            </div>
            <div className={`menu ${menuOpen ? 'active' : ''}`}>
              <ul>
                <li><u><Link className="font" to="/" onClick={closeMenu}>главная</Link></u></li>
                <li><Link className="font" to="/articles" onClick={closeMenu}>статьи</Link></li>
                <li><Link className="font" to="/headings" onClick={closeMenu}>рубрики</Link></li>
                <li><Link className="font" to="/favorites" onClick={closeMenu}>избранные</Link></li>
                <li><Link className="font" to="/contacts" onClick={closeMenu}>контакты</Link></li>
              </ul>
            </div>
          </div>
          <div className="container-banner">
             <Link to="/">
              <img className="banner" src="/img/blake.banner.png" alt="BLAKE Banner" />
             </Link>
             <a href="#subscribe-form">
               <img className="subscribebanner" src="/img/subscribebanner.jpg" alt="Subscribe" />
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
