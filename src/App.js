import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>To-Do</h1>
      <div className="App">
        <Todo />
      </div>
    </div>
  );
}

export default App;
