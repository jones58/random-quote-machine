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

const colors = ["#746198", "#4781a7", "#589a5d", "#b3af38", "#b27d58"];
function App() {
  const getNewQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  const [quote, setQuote] = useState(getNewQuote);

  const changeQuote = () => {
    setQuote(getNewQuote());
  };

  return (
    <>
      <div id="quote-box" className="App">
        <h1 id="text">{quote.text}</h1>
        <p id="author">{quote.author}</p>
        <div className="buttons">
          <button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `"${quote.text}" (${quote.author})`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              Tweet Quote
            </a>
          </button>
          <button id="new-quote" onClick={changeQuote}>
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
