import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        content: '',
    };

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.content.trim()) return;
        this.props.addTodo(this.state);
        this.setState({
            content: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new task:</label>
                    <input
                        className={'white-text'}
                        type={'text'}
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                </form>
            </div>
        );
    }
}

export default AddTask;
