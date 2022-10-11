import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book {...book} key={book.id}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
