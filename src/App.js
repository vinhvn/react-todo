import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy groceries' },
            { id: 2, content: 'learn something new' },
            { id: 3, content: 'work on side project' },
            { id: 4, content: 'write english essay' },
        ],
    };

    deleteTodo = (id) => {
        const todos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({ todos });
    };

    addTodo = (todo) => {
        todo.id = Math.random() * 100;
        let todos = [...this.state.todos, todo];
        this.setState({ todos });
    };

    render() {
        return (
            <div className={'todo-app container'}>
                <h1 className={'center red-text'}>Tasks</h1>
                <AddTask addTodo={this.addTodo} />
                <Tasks todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
