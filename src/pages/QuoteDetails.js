import React from 'react';
import Comments from '../components/comments/Comments';
import { Route, useParams } from 'react-router-dom'


const QuoteDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>QuoteDetails</h1>
      <h1>Id: {params.quoteId}</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
         <Comments />
      </Route>
    </>

  )
}

export default QuoteDetails