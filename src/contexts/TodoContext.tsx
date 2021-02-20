import React, { createContext, useEffect, useState } from 'react';
import { TodoContextType } from './TodoContextType';
import { Todo } from "../models/Todo";
import { get, save } from '../services/TodoService';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { }
});

const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  useEffect(() => {
    save(todos);
  }, [todos])

  const addTodo = (title: string) => {
    const maxIndex = Math.max.apply(
      Math, todos.map(todo => todo.id)
    )
    const todo = { id: maxIndex + 1, title: title, done: false }
    setTodos([...todos, todo]);
  }

  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  }

  const toggleTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  }

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      toggleTodo
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
