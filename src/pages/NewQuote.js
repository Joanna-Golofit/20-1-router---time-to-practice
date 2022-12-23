import QuoteForm from '../components/quotes/QuoteForm';
import React, { useEffect } from 'react'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  // console.log("history", history)

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes') // we are navigated away to /quotes
    }
  }, [status, history])


  const addQuoteHandler = quoteData => {
    sendRequest(quoteData) //{author: 'fgh', text: ' fgh'}
  }

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default NewQuote