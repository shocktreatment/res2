import { useSelector, useDispatch } from "react-redux";
import { FreezeBtn } from "./FreezeBtn";
import { statusFilters } from "../../../redux/todos/constants";
import { setStatusFilter } from "../../../redux/todos/filterSlice";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <FreezeBtn
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </FreezeBtn>
      <FreezeBtn
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </FreezeBtn>
      <FreezeBtn
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </FreezeBtn>
    </div>
  );
};
