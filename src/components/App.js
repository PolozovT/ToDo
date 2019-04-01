import React, { Component } from 'react';
import Header from "./Header";
import ToDoItem from "./ToDoItem"
import Footer from "./Footer"
import elems from './elems'

function App() {
  const elemComp = elems.map(elem =>
      <Footer key = {elem.id} description = {elem.description} />
  )

  return (
      <div>
          <Header/>
          <div className="todo-list">
              <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
                <ToDoItem/>
          </div>
          {elemComp}
      </div>
  )
}

export default App;
