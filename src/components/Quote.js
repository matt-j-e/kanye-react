import React from "react";

const Quote = ({ quote }) => {
    console.log(quote);
    return (
        <>
            <h1>Kanye's asynchronous wisdom</h1>
            <p className="quote">{quote.quote}</p>
        </>
    )
}

export default Quote;