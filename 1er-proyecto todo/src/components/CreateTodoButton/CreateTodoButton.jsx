import { useContext } from 'react';
import { IconAdd } from '../../assets/Icons';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoProvider/TodoProvider';

export function CreateTodoButton({ setOpenModal }) {
  const { setClickPosition } = useContext(TodoContext);

  const onClickButton = (event) => {
    setClickPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setOpenModal(true);
  };

  return (
    <button className="todo-button-add" onClick={onClickButton}>
      <IconAdd size={20} color="var(--layout-foreground)" stroke={3} /> New Task
    </button>
  );
}
