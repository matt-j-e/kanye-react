import React from "react";
import getQuote from "../requests/getQuote";
const NewQuoteButton = ({ setQuote }) => {

    const handleClick = (event) => {
        getQuote(setQuote);
    };
    
    return <button type="button" onClick={handleClick}>Hit me Kanye!</button>
}

export default NewQuoteButton;