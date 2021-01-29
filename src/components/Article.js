const Article = ({ articleEntries }) => {
  if (!articleEntries.entries.h3) {
    return (
      <div>
        <article id={articleEntries.id}>
          <h2>{articleEntries.entries.h2}</h2>
          <img src={articleEntries.entries.img} alt={articleEntries.id}></img>
          {articleEntries.entries.texts.map((text) => (
            <p key={text.id}>{text.entry}</p>
          ))}
        </article>
      </div>
    );
  }

  return (
    <section>
      <article id={articleEntries.id}>
        <h2>{articleEntries.entries.h2}</h2>
        <h3>{articleEntries.entries.h3}</h3>
        <img src={articleEntries.entries.img} alt={articleEntries.id}></img>
        {articleEntries.entries.texts.map((text) => (
          <p key={text.id}>{text.entry}</p>
        ))}
      </article>
    </section>
  );
};

export { Article as default };
