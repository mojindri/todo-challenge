import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios';
import './App.css';
import Summary from "./components/layout/Summary";

class App extends Component {
    state = {
        todos: []
    }

    constructor(props) {
        super(props);
        this.base_uri = "https://jsonplaceholder.typicode.com/todos";
    }

    //GET LIST OF TODOS
    //you can use this:     axios.get(this.base_uri + '?_limit=10').then(res => { const data = res.data;  /* your code here*/ });

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    toDoADD = (title) => {
        axios.post(this.base_uri, {
            title: title,
            completed: false
        })
            .then(res => {
                const todo = res.data;
                //write your code
                //implement  Add TODO
            })
    }

    toDoDELETE = (id) => {
        axios.delete(this.base_uri + `/${id}`)
            .then(res => {
                //write your code
                //implement remove TODO
            });

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="Container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.toDoADD()}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete}
                                       delTodo={this.toDoDELETE}/>
                                <Summary/>
                            </React.Fragment>
                        )}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
