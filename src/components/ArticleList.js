import Article from "./Article";

import { articleEntries } from "../fixtures/articleList";

const ArticleList = (props) => (
  <div id="content">
    {articleEntries.map((article) => (
      <div key={article.id}>
        <h2>{article.h2}</h2>
        <Article articleEntries={article} />
      </div>
    ))}
  </div>
);

export { ArticleList as default };
