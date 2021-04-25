import React, { useState, useEffect } from "react";
import getNumberFact from "../requests/getNumberFact";

const NumberFact = ({ quote }) => {
    
    const [factString, setFactString] = useState("");

    const phrase = quote;
    const letterCount = phrase.match(/[a-zA-Z]/g).length;
    const wordCount = phrase.split(" ").length;
    useEffect(() => {
        getNumberFact(letterCount * wordCount)
            .then((response) => setFactString(response));
    }, [quote])

    return (
        <div>
        <p>This quote contains {letterCount} letters in {wordCount} words.</p>
        <p>{letterCount} x {wordCount} = {letterCount * wordCount}</p>
        <p>{factString}</p>
        </div>
    )
}

export default NumberFact;