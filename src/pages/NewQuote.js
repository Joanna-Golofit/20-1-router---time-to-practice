import QuoteForm from '../components/quotes/QuoteForm';
import React from 'react'

const NewQuote = () => {
  const addQuoteHandler = quoteData => {
    console.log(quoteData)
  }
  return <QuoteForm onAddQuote={ addQuoteHandler} />
}

export default NewQuote