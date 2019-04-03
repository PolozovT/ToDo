import React, { Component } from 'react';
import Header from "./Header";
import ToDoItem from "./ToDoItem"
import Footer from "./Footer"
import elems from './elems'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:elems
        }
    }

    render() {
        const elemComp = this.state.todos.map(elem =>
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
}

export default App;
