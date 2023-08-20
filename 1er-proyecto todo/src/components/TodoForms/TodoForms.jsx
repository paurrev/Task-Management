import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoProvider';
import { AddIcon } from '../TodoIcons/AddIcon';
import { CancelIcon } from '../TodoIcons/CancelIcon';
import './TodoForms.css';

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [ newTodoValue, setNewTodoValue ] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    console.log(newTodoValue)
    setOpenModal(false)
  };

  const onClickCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="todoForm-container" onSubmit={onSubmit}>
      <label className="todoForm-title2">Escribe una nueva Tarea</label>
      <textarea
        required
        className="todoForm-text"
        value={newTodoValue}
        onChange={onChange}
      />
      <label className="todoForm-title">Escribe una nueva Tarea</label>
      <div className="todoForm-buttons">
        <button
          type="button"
          className="todoForm-cancel"
          onClick={onClickCancel}
        >
          <div className="cancel-container">
            <CancelIcon className="todoForm-cancel_icon todoForm-button" />
          </div>
          <span className="todoForm-text_cancel todoForm-txt">Cancel</span>
        </button>
        <button className="todoForm-add" type="submit">
          <span className="todoForm-text_add todoForm-txt">Add</span>
          <div className="add-container">
            <AddIcon className="todoForm-add_icon todoForm-button" />
          </div>
        </button>
      </div>
    </form>
  );
}
