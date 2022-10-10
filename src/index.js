import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    title: "I LOVE YOU TO THE MOON AND BACK",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
  },

  {
    title: "It Starts with Us: A Novel (2) (It Ends with Us)",
    author: "Colleen Hoover",
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
  },

  {
    title:
      "Confidence Man: The Making of Donald Trump and the Breaking of America",
    author: "Maggie Haberman",
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91vNnoglNOL._AC_UL600_SR600,400_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="eee" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
