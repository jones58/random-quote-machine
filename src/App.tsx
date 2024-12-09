import "./App.css";

import { useState } from "react";

const quotes = [
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
  },
  {
    text: "Indifference towards people and the reality in which they live is actually the one and only cardinal sin in design.",
    author: "Dieter Rams",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Ernő Goldfinger",
  },
  {
    text: "Typography is not just an art form. It is a craft that everyone uses, but few understand.",
    author: "Erik Spiekermann",
  },
  {
    text: "You can say something with typography even when you don't say anything.",
    author: "Erik Spiekermann",
  },
];

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
];

function App() {
  const getNewQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const [quote, setQuote] = useState(getNewQuote);

  const changeQuote = () => {
    setQuote(getNewQuote());
    document.body.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">{quote.author}</div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" (${quote.author})`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button id="new-quote" onClick={changeQuote}>
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
