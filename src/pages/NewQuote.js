import QuoteForm from '../components/quotes/QuoteForm';
import React from 'react'
import { useHistory } from 'react-router-dom';

const NewQuote = () => {

  const history = useHistory();
  console.log("history", history)

  const addQuoteHandler = quoteData => {
    console.log("addQuoteHandler", quoteData)
    history.push('/quotes') // we are navigated away to /quotes
    console.log("history", history)

  }

  return <QuoteForm onAddQuote={ addQuoteHandler} />
}

export default NewQuote