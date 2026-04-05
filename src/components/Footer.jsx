import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [faqOpen, setFaqOpen] = useState(false);

  const toggleAnswer = () => {
    setFaqOpen(!faqOpen);
  };

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="faq">
          <div className="question" onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
            <p id="toggleButton" className="font" style={{ margin: 0 }}>
              Издание 
              <img 
                className={`small-image ${faqOpen ? 'rotate' : ''}`} 
                id="rotateImage" 
                src="/img/down.jpg" 
                alt="Открыть" 
                style={{ marginLeft: '10px' }}
              />
            </p>
            <div className={`answer ${faqOpen ? 'open' : ''}`}>
              <p><Link className="font" to="/article/item?=1">О нас</Link></p>
              <p><Link className="font" to="/faq">FAQ</Link></p>
            </div>
          </div>
          <div className="question">
            <p className="font" style={{ margin: 0 }}>Социальные сети</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/blake.kz/" target="_blank" rel="noreferrer">
                <img src="/img/insta.logo.jpg" alt="Instagram" />
              </a>
              <a href="https://t.me/blake.kz" target="_blank" rel="noreferrer">
                <img src="/img/telegram.logo.jpg" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-text">
          <p>© 2023 TOO "BLAKE". Все права защищены. Используя сайт, вы соглашаетесь с <Link to="/policy"><u>Политикой Конфиденциальности</u></Link>. Материалы на этом сайте не могут быть использованы в коммерческих целях, за исключением письменного разрешения TOO "BLAKE". Казахстан</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
