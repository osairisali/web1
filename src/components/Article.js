const Article = ({ articleEntries }) => (
  <div>
    <article id={articleEntries.id}>
      <img src={articleEntries.entry.img} alt={articleEntries.id}></img>
      {articleEntries.entry.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </article>
  </div>
);

export { Article as default };
