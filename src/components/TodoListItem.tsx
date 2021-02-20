import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";
import { Todo } from "../models/Todo";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {

  const { toggleTodo, removeTodo } = useContext<TodoContextType>(TodoContext);

  const handleChange = () => {
    toggleTodo(todo);
  }

  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
          />
        </label>
      </td>
      <td className="uk-width-expand">{todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(todo)}
        ></button>
      </td>
    </tr>
  );
};

export default TodoListItem;
