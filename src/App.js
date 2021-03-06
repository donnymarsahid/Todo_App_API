import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './404/NoMatch';
import Login from './access/Login';
import Register from './access/Register';
import Step from './access/Step';
import TodoApp from './todo/TodoApp';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/step" component={Step} />
          <Route path="/" component={TodoApp} />
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
