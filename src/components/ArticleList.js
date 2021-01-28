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

    {/* <section>
      <Article key={wisata1.id} articleEntries={wisata1} h3={wisata1.entry.h3} />
    </section>
    <section>
      <Article key={wisata2.id} articleEntries={wisata2} h3={wisata2.entry.h3} />
    </section> */}
  </div>
);

export { ArticleList as default };
