import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Notes from './pages/Note';
import AddUpdateNote from './pages/AddUpdateNote';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Notes} />
            <Route exact path="/add" component={AddUpdateNote} />
            <Route exact path="/update/:id" component={AddUpdateNote} />
            {/* set up default/404, this must come last */}
            <Route render={() => <h1>404 bro</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
