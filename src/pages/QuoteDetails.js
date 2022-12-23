import React, { useEffect } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'a1234' },
//   { id: 'q2', author: 'Max', text: 'b6789' },
//   { id: 'q3', author: 'Max', text: 'c1234' },
//   { id: 'q4', author: 'Max', text: 'd6789' }
// ]

const QuoteDetails = () => {
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  const params = useParams();
  const { quoteId } = params;
  console.log("y", params);
  const match = useRouteMatch();
  // const quote = loadedQuote?.find(quote => quote.id === params.quoteId)
  console.log("y match", match);

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <p className='centered focused'>
        {error}
      </p>
    )
  }

  if (!loadedQuote.text) {
    return <p>No Quote found</p>
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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