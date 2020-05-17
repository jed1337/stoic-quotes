import React from "react";

const QuoteBox = ({quote}) => {
    const [quoteText,author] = quote.split(/[-―]/)

    return(
        <div>
            <div>{quoteText}</div>
            <div>{author}</div>
        </div>
    )
}

export default QuoteBox