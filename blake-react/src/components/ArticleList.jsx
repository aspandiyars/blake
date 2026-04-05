import { Link } from 'react-router-dom';
import { itemData } from '../data/articles';

function ArticleList() {
  return (
    <>
      {itemData.slice(0, 5).map(article => {
        const firstParagraph = article.paragraphs[0].substring(0, 110) + (article.paragraphs[0].length > 110 ? "..." : "");
        
        return (
          <div className="article" key={article.id}>
            <Link className="article-link" to={`/article/a?id=${article.id}`}>
              <div 
                className="article-image" 
                style={{ backgroundImage: `url(${article.image}), url(${article.image0})` }}
              ></div>
              <div className="article-info">
                <p className="category">{article.category}</p>
                <p className="title">{article.title}</p>
                <p 
                  className="nonmobile" 
                  dangerouslySetInnerHTML={{ __html: firstParagraph }} 
                />
                <p className="author2">Автор: {article.author}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ArticleList;
