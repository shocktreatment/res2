import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "../../redux/todos/todoSlice";

import Button from "../../shared/components/Btn/Button";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li
      key={id}
      style={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "5px",
        padding: "5px",
        margin: "2px",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo({ id }))}
      />
      <p>{text}</p>
     
      <Button type={"button"} onClick={() => dispatch(removeTodo({ id }))}>
        <p>x</p>
      </Button>
    </li>
  );
};

export default TodoItem;
