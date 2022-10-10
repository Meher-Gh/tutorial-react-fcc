import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  title: "I LOVE YOU TO THE MOON AND BACK",
  author: "Amelia Hepworth",
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
};

const secondBook = {
  title: "It Starts with Us: A Novel (2) (It Ends with Us)",
  author: "Colleen Hoover",
  img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          atque?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="eee" />
      <h4>{author} </h4>
      {children}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
