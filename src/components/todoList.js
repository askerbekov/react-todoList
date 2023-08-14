import React, {Component} from 'react';
import TodoItem from './todoItem'

export default function  TodoList({todos}){
    return(
        <ul>
            {todos.map(item => <TodoItem key={item.id} {...item}/>)}
        </ul>
    )
}
