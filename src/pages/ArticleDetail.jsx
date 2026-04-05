import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { itemData } from '../data/articles';
import ArticleList from '../components/ArticleList';

function ArticleDetail() {
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // location.search could be "?1" or "?id=1"
    const query = location.search.replace('?', '').replace('id=', '');
    const articleId = parseInt(query, 10);
    const found = itemData.find(item => item.id === articleId);
    setArticle(found);
  }, [location]);

  useEffect(() => {
    if (article) {
      document.title = article.title;
    }
  }, [article]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (error) {
         console.error('Ошибка шаринга:', error);
      }
    } else {
      alert('Web Share API не поддерживается в вашем браузере');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Ссылка скопирована!');
  };

  if (!article) return <div className="body-p"><div className="container-p">Статья не найдена.</div></div>;

  return (
    <>
      <div className="body-p">
        <div className="container-p">
          <div className="article">
            <Link className="heading" to={`/heading/${article.category}`}>{article.category}</Link>
            <p className="title1">{article.title}</p>
            <p className="author">Автор: <Link to={`/author/${article.authorlink}`}>{article.author}</Link></p>
            <p className="data">{article.data}</p>
            
            <div className="share-container">
              <button className="shareButton" id="shareButton" onClick={handleShare}>
                <img className="shareImage" src="/img/sharebutton.png" alt="Share" />Поделиться
              </button>
              <button className="shareButton" id="copyButton" onClick={handleCopy}>
                <img className="shareImage1" src="/img/copybutton.png" alt="Copy" />
              </button>
              <a className="shareButton" id="mobileButton" href={`sms:?body=${encodeURIComponent("Прочитайте: " + window.location.href)}`}>
                <img className="shareImage1" src="/img/smsbutton.jpg" alt="SMS" />
              </a>
              <a className="shareButton" id="emailButton" href={`mailto:?body=${encodeURIComponent("Прочитайте: " + window.location.href)}`}>
                <img className="shareImage1" src="/img/mailbutton.jpg" alt="Email" />
              </a>
            </div>

            <img className="image1" src={article.image} alt={article.title} />

            {article.paragraphs.map((p, index) => (
              <div key={index}>
                <p className="text">{p}</p>
                {index === 1 && (
                  <a href="https://www.instagram.com/blake.kz" target="_blank" rel="noreferrer">
                    <img className="image-between-paragraphs" src="/img/blakead.jpg" alt="Ads" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="body-form">
        <div className="container-form">
          {!submitted ? (
            <div id="subscribe-form">
              <p className="subscribeTitle">Подпишитесь на новостную рассылку</p>
              <p className="subscribeDes">Смотрите топовые подборки BLAKE на своей электронной почте каждую неделю!</p>
              <form className="form1" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <input type="email" id="email-address" name="email" placeholder="Введите ваш email" required />
                <button type="submit">ПОДПИСАТЬСЯ</button>
                <p>Нажимая на кнопку Подписаться, вы соглашаетесь с Условиями обработки персональных данных</p>
              </form>
            </div>
          ) : (
            <div id="thank-you-message">
              <p className="subscribeTitle" id="subscribeText">Вы подписались!</p>
              <p className="subscribeDes">Спасибо за подписку на рассылку. Смотрите топовые подборки BLAKE на своей электронной почте каждую неделю!</p>
            </div>
          )}
        </div>
      </div>

      <div className="body-art">
        <div className="container-art">
          <p className="arttext">Читайте также</p>
          <div className="article-container">
            <ArticleList />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleDetail;
