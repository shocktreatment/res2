import { useSelector } from "react-redux";

import { statusFilters } from "../../redux/todos/constants";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const statusFilter = useSelector((state) => state.filters.status);

  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  const filterTodos = getVisibleTasks(todos, statusFilter);

  return (
    <ol style={{ padding: "0" }}>
      {filterTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ol>
  );
};

export default TodoList;
