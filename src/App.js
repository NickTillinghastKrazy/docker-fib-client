import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <Link to="/">Home</Link>
        <Link to="/Otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib}/>
        <Route path="/otherpage" component={OtherPage}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
