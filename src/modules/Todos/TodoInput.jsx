import Button from "../../shared/components/Btn/Button";

const TodoInput = ({ text, handleInput, handleSubmit }) => {
  return (
    <>
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
          style={{ width: "234px" }}
        />
       
        <Button type="button" onClick={handleSubmit}>
          <p>Add todo</p>
        </Button>
      </label>
    </>
  );
};

export default TodoInput;
