import SubscribeForm from '../components/SubscribeForm';
import ArticleList from '../components/ArticleList';

function Headings() {
  return (
    <>
      <div className="body-p">
        <div className="container-p">
          <p className="title">Рубрики</p>
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

      <SubscribeForm containerId="contact-form" />
    </>
  );
}

export default Headings;
