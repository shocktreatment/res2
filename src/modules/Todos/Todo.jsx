import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../../redux/todos/todoSlice";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function Todo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const isTodos = useSelector((store) => store.todos.todos);

  const addTask = () => {
    if (!text.length) {
      alert("Add something todos");
      return;
    }
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <TodoInput text={text} handleInput={setText} handleSubmit={addTask} />
      
      {isTodos.length > 0 ? (
        <TodoList />
      ) : (
        <p style={{ padding: "20px" }}>No todos. Please add your goals.</p>
      )}
    </div>
  );
}

export default Todo;
