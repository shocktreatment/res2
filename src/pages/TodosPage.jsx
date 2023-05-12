import { StatusFilter } from "../modules/Todos/TodoFilter/StatusFilter";
import Todo from "../modules/Todos/Todo";
import { TodoCounter } from "../modules/Todos/TodoCounter";

const TodosPage = () => {
  return (
    <div style={{ display: "flex", gap: "120px" }}>
      <Todo />
      <div>
        <TodoCounter />
        <StatusFilter />
      </div>
    </div>
  );
};

export default TodosPage;
