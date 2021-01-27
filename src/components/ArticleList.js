import Article from "./Article";

import { articleEntries } from "../fixtures/articleList";

const ArticleList = (props) => (
  <div id="content">
    {articleEntries.map((article) => (
      <Article key={article.id} articleEntries={article} />
    ))}
  </div>
);

export { ArticleList as default };
