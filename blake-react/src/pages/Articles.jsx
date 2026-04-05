import SubscribeForm from '../components/SubscribeForm';
import ArticleList from '../components/ArticleList';

function Articles() {
  return (
    <>
      <div className="body-art">
        <div className="container-art">
          <div className="article-container">
            <ArticleList />
          </div>
        </div>
      </div>
      <SubscribeForm containerId="contact-form" />
    </>
  );
}

export default Articles;
