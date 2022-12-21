import React from 'react'
import { Link } from 'react-router-dom'

const AllQuotes = () => {
  return (
    <section>
    <div>AllQuotes</div>
      <ul>
        <li><Link to='/quotes/:p1'>A book</Link></li>
        <li><Link to='/quotes/:p2'>A carpet</Link></li>
        <li><Link to='/quotes/:p3'>Climbing course</Link></li>
      </ul>
    </section>
  )
}

export default AllQuotes