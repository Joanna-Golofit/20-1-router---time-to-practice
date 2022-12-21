import React from 'react';
import { useParams } from 'react-router-dom'


const QuoteDetails = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>QuoteDetails</h1>
      <h1>Id: {params.quoteId}</h1>
    </>

  )
}

export default QuoteDetails