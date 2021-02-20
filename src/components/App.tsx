import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import NavBar from './NavBar';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoContext>
      <div className="uk-container">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/create">
              <AddTodo />
            </Route>
            <Route path="/">
              <TodoList />
            </Route>
          </Switch>
        </Router>

      </div>
    </TodoContext>
  );
}

export default App;