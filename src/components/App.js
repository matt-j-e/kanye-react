import React, { useState, useEffect } from "react";
import getQuote from "../requests/getQuote";
import Quote from "./Quote";
import NewQuoteButton from "./NewQuoteButton";
import "../styles/App.css";

function App() {

  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote(setQuote);
  }, []);

  return (
    <div className="App">
      <Quote quote={quote} />
      <NewQuoteButton setQuote={setQuote} />
    </div>
  );
}


export default App;
