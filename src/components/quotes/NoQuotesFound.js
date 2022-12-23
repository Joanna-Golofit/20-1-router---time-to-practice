import { Link } from 'react-router-dom';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      {/* <a className='btn'>
        Add a Quote */}
      <Link className='btn' activeClassName={classes.active} to='/new-quote'>Add a Quote</Link>
      {/* </a> */}
    </div>
  );
};

export default NoQuotesFound;
