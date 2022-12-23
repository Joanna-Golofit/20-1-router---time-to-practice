import React from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'a1234' },
  { id: 'q2', author: 'Max', text: 'b6789' },
  { id: 'q3', author: 'Max', text: 'c1234' },
  { id: 'q4', author: 'Max', text: 'd6789' }
]

const QuoteDetails = () => {
  const params = useParams();
  console.log("y", params);
  const match = useRouteMatch();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
  console.log("y match", match);

  if (!quote) {
    return <p>No Quote found</p>
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.url} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>

  )
}

export default QuoteDetails