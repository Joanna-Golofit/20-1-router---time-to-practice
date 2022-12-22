import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'a1234' },
  { id: 'q2', author: 'Max', text: 'b6789' },
  { id: 'q3', author: 'Max', text: 'c1234' },
  { id: 'q4', author: 'Max', text: 'd6789' }
]

const AllQuotes = () => {
  return (
    // <section>
      <QuoteList quotes={DUMMY_QUOTES} />
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