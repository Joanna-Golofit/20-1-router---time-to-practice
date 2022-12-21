import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: '1234'},
  {id: 'q2', author: 'Max', text: '6789'}
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