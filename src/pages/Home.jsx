import SubscribeForm from '../components/SubscribeForm';
import ArticleList from '../components/ArticleList';

function Home() {
  return (
    <>
      <div className="body-art">
        <div className="container-art">
          <div className="article-container">
            <ArticleList />
          </div>
        </div>
      </div>
      <SubscribeForm containerId="subscribe-form" />
    </>
  );
}

export default Home;
