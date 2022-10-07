import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  title: "I LOVE YOU TO THE MOON AND BACK",
  author: "Amelia Hepworth",
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="eee" />
      <h1>{props.title}</h1>
      <h4>{props.author} </h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
