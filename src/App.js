import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import AllQuotes from "./pages/AllQuotes";

function App() {
  return (
    <>
      <NavLink to='/quotes'>AllQuotes</NavLink>
      <NavLink to='/quotes/:quoteId'>QuoteDetails</NavLink>
      <NavLink to='/new-quote'>NewQuote</NavLink>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
        {/* <Route path='/quotes'> */}
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
      </Switch>
    </>
  );
}

export default App;
