import React, { useEffect } from 'react'
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Max', text: 'a1234' },
//   { id: 'q2', author: 'Max', text: 'b6789' },
//   { id: 'q3', author: 'Max', text: 'c1234' },
//   { id: 'q4', author: 'Max', text: 'd6789' }
// ]

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

useEffect(() => {
  sendRequest()
}, [sendRequest])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
    </div>
    )
  }
  console.log("loadedQuotes", loadedQuotes)

  if (error) {
    return (
      <p className='centered focused'>
        {error}
      </p>
    )
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <NoQuotesFound />
    )
  }

  return (
    // <section>
    // <NoQuotesFound />
    <QuoteList quotes={loadedQuotes} />
    // <h1>AllQuotes</h1>
    //   <ul>
    //     <li><Link to='/quotes/p1'>A book</Link></li>
    //     <li><Link to='/quotes/p2'>A carpet</Link></li>
    //     <li><Link to='/quotes/p3'>Climbing course</Link></li>
    //   </ul>
    // </section>
  )
}

export default AllQuotes