import React from "react";

export const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("test");
  };

  const complexExemple = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="eee" />
      <h1>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        reference exemple
      </button>
      <button onClick={() => complexExemple(author)}>more complex exp</button>
    </article>
  );
};
