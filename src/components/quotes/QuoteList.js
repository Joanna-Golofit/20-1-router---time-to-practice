import { Fragment, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const [sortedQuotes, setSortedQuotes] = useState(props.quotes);
  // console.log("sortedQuotes", sortedQuotes)
  console.log("location", location)
  // console.log("location", location.search)


  const changeSortingHandler = () => {
    // history.push(`${match.url}?sort=desc`) // albo zapis w obiekcie:
    history.push({
      pathname: match.url,
      search: '?sort=desc'
    })
    console.log("bla")
    if (location.search === '?sort=desc') {
      history.push(`${match.url}?sort=asc`)
      setSortedQuotes(props.quotes.sort((a, b) => a.text.localeCompare(b.text)))
    } else {
      setSortedQuotes(props.quotes.sort((a, b) => b.text.localeCompare(a.text)))
    }

    console.log("sortedQuotes2", sortedQuotes)

  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>{`Sort ${location.search === '?sort=asc' ? 'Ascending' : 'Descending'}`}</button>
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
