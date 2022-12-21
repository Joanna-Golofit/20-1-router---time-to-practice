import React from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Route, useParams } from 'react-router-dom'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: '1234' },
  { id: 'q2', author: 'Max', text: '6789' }
]

const QuoteDetails = () => {
  const params = useParams();
  console.log("y", params);
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
  console.log("y quote", quote);

  if (!quote) {
    return <p>No Quote found</p>
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <h1>QuoteDetails</h1>
      <h1>Id: {params.quoteId}</h1> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
         <Comments />
      </Route>
    </>

  )
}

export default QuoteDetails