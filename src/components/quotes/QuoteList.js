import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [sortedQuotes, setSortedQuotes] = useState(props.quotes);
  // console.log("sortedQuotes", sortedQuotes)
  console.log("location", location.search)


  const changeSortingHandler = () => {
    history.push('/quotes?sort=asc')
    console.log("bla")
    if (location.search === '?sort=asc') {
      setSortedQuotes(props.quotes.sort((a, b) => a.text.localeCompare(b.text)))
      history.push('/quotes?sort=desc')
    } else {
      setSortedQuotes(props.quotes.sort((a, b) => b.text.localeCompare(a.text)))
    }

    console.log("sortedQuotes2", sortedQuotes)

  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort Ascending</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
