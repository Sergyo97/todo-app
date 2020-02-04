import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {
    render() {
        const todoList = this.props.todoList.map((toDo, i) => {
            return (
                <Todo
                    key={'toDo_' + i}
                    text={this.props.text}
                    priority={this.props.priority}
                    dueDate={this.props.dueDate}
                />
            )
        })
        return (
            <ul>{todoList}</ul>
        );
    }
}