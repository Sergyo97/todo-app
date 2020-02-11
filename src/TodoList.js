import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {

    render() {
        const todoList = this.props.todoList.map((toDo, i) => {
            return (
                <Todo
                    key={'toDo_' + i}
                    text={toDo.text}
                    priority={toDo.priority}
                    dueDate={toDo.dueDate.toString()}
                />
            )
        })
        return (
            <ul>{todoList}</ul>
        );
    }
}