import React, {Component} from 'react';
import TodoList from "./components/todoList";

export default class App extends Component {
    state = {
        todos: [
            {id: 1, title: "Learn React" , completed: true},
            {id: 2, title: "Learn Redux" , completed: true}
        ]
    }

    render() {
        return(
            <div>
                <h1>Todo app</h1>
                <div>
                    <input type="text"/>
                    <label>Todo name</label>
                </div>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}