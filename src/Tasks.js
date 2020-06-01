import React from 'react';
import './Tasks.css';

function Tasks({ todos, deleteTodo }) {
    // check if we have any tasks
    const todoList = todos.length ? (
        todos.map((todo) => {
            return (
                <div className={'collection-item transparent'} key={todo.id}>
                    <h6 className={'white-text'}>
                        <button
                            className={
                                'waves-effect waves-light btn-small pink accent-3'
                            }
                            onClick={() => {
                                deleteTodo(todo.id);
                            }}
                        >
                            Delete
                            <i className={'material-icons left'}>cancel</i>
                        </button>
                        {todo.content}
                    </h6>
                </div>
            );
        })
    ) : (
        <p className={'center white-text'}>You have no tasks left. Hooray!</p>
    );

    return (
        <div className={'row'}>
            <div className={'col s8 offset-s2'}>
                <div className={'todos collection'}>{todoList}</div>
            </div>
        </div>
    );
}

export default Tasks;
