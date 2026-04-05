import { useState } from 'react';

function SubscribeForm({ containerId = "subscribe-form" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <div id={containerId}>
          <div className="body1">
            <div className="container1">
              <p className="subscribeText" id="subscribeText">Подпишитесь на нашу рассылку, чтобы узнавать о новинках первыми</p>
              <p className="subscribeDes">Смотрите топовые подборки BLAKE на своей электронной почте каждую неделю!</p>
              <form onSubmit={handleSubmit}>
                <input type="email" id="email-address" name="email" placeholder="Введите ваш email" required />
                <button type="submit">ПОДПИСАТЬСЯ</button>
                <p>Нажимая на кнопку Подписаться, вы соглашаетесь с Условиями обработки персональных данных</p>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div id="thank-you-message">
          <div className="body2">
            <div className="container2">
              <p className="subscribeText" id="subscribeText">Вы подписались!</p>
              <p className="subscribeDes">Спасибо за подписку на рассылку. Смотрите топовые подборки BLAKE на своей электронной почте каждую неделю!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SubscribeForm;
