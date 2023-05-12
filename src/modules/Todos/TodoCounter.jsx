import { useSelector } from "react-redux";
// import { getTasks } from "redux/selectors";
// import css from "./TaskCounter.module.css";

export const TodoCounter = () => {
  const tasks = useSelector((state) => state.todos.todos);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div style={{ marginBottom: "10px" }}>
      <p style={{ margin: "0" }}>Active: {count.active}</p>
      <p style={{ margin: "0" }}>Completed: {count.completed}</p>
    </div>
  );
};
