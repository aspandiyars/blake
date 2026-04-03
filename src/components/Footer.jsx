import React, { useState } from 'react';

const Footer = () => {
    const [answerOpen, setAnswerOpen] = useState(null);

    const toggleAnswer = (index) => {
        setAnswerOpen(answerOpen === index ? null : index);
    };

    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="faq">
                    <div className="question" onClick={() => toggleAnswer(0)}>
                        <p id="toggleButton" className="font">
                            Издание{' '}
                            <img
                                className={`small-image ${answerOpen === 0 ? 'rotate' : ''}`}
                                id="rotateImage"
                                src="img/down.jpg"
                                alt="Открыть"
                            />
                        </p>
                        <div className={`answer ${answerOpen === 0 ? 'open' : ''}`}>
                            <p>
                                <a className="font" href="article/item?=1">
                                    О нас
                                </a>
                            </p>
                            <p>
                                <a className="font" href="faq">
                                    FAQ
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="question" onClick={() => toggleAnswer(1)}>
                        <p className="font">Социальные сети</p>
                        <div className={`social-icons ${answerOpen === 1 ? 'open' : ''}`}>
                            <a
                                href="https://www.instagram.com/blake.kz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="img/insta.logo.jpg" alt="Instagram" />
                            </a>
                            <a
                                href="https://t.me/blake.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="img/telegram.logo.jpg" alt="Telegram" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-text">
                    <p>
                        © 2023 TOO "BLAKE". Все права защищены. Используя сайт, вы
                        соглашаетесь с{' '}
                        <a href="policy">
                            <u>Политикой Конфиденциальности</u>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;