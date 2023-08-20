import './CreateTodoButton.css';

export function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(true);
  };
  return (
    <button className="todo-button-add" onClick={onClickButton}>
      + add new task
    </button>
  );
}
