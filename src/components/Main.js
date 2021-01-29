import ArticleList from "./ArticleList";
import Aside from "./Aside";

const Main = (props) => (
  <main>
    <div id="content">
      <ArticleList />
      <Aside />
    </div>
  </main>
);

export { Main as default };
