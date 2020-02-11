import React from 'react';
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.props = {todoList: []}
        this.state = { todoList: [], text: '', priority: 0, dueDate: new Date() };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>To Do List</h3>
                <TodoList todoList={this.props.todoList} />
                <TodoList todoList={this.state.todoList} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <br />
                    <input
                        type="number"
                        id="new-priority"
                        onChange={this.handleChange}
                        value={this.state.priority}
                    />
                    <br />
                    <input
                        type="date"
                        id="new-dueDate"
                        onChange={this.handleChange}
                        value={this.state.dueDate}
                    />
                    <br />
                    <button>
                        Add #{this.state.todoList.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: document.getElementById('new-todo').value });
        this.setState({ priority: document.getElementById('new-priority').value });
        this.setState({ dueDate: document.getElementById('new-dueDate').value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            id: Date.now()
        };
        console.log(newItem);
        this.setState(prevState => ({
            todoList: prevState.todoList.concat(newItem),
            text: ''
        }));
    }
}