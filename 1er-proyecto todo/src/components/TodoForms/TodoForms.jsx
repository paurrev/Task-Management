import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoProvider';
import { AddIcon } from '../TodoIcons/AddIcon';
import { CancelIcon } from '../TodoIcons/CancelIcon';
import './TodoForms.css';
import '../../variables.css';
import { IconClose } from '../../assets/Icons';

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    console.log(newTodoValue);
    setOpenModal(false);
  };

  const onClickCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="todoForm-container" onSubmit={onSubmit}>
      <div className="TodoForm-navbar">
        <IconClose
          size={24}
          color="var(--default-50)"
          stroke={3}
          onClick={onClickCancel}
          className="TodoForm-close"
        />
        <div className='TodoForm-title'>
          <span>Add new task</span>
        </div>
      </div>
      <label className="TodoForm-title2"></label>
      <input
        required
        type="text"
        placeholder="Write a new task"
        className="TodoForm-text"
        value={newTodoValue}
        onChange={onChange}
      />
      <hr className="divider-textarea" />
      <div className="TodoForm-button">
        <button className="TodoForm-create-task" type="submit">
          Create new task
        </button>
      </div>
    </form>
  );
}
