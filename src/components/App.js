import React, { Component } from 'react';
import Header from "./Header";
import ToDoItem from "./ToDoItem"
function App() {
  return (
      <div>
          <Header/>
          <div className="todo-list">
              <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
          </div>
      </div>
  )
}

export default App;
