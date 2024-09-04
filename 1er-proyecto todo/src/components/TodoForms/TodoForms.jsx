import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoProvider/TodoProvider';
import { AddIcon } from '../TodoIcons/AddIcon';
import { CancelIcon } from '../TodoIcons/CancelIcon';
import './TodoForms.css';
import '../../variables.css';
import { IconClose } from '../../assets/Icons';
import { TodoRadio } from '../TodoRadio/TodoRadio';
import { TodoCalendarPicker } from '../TodoCalendarPicker/TodoCalendarPicker';

export function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');
  const [selectValue, setSelectValue] = useState('todo');
  const [radioValue, setRadioValue] = useState('');
  const [dateValue , setDateValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue, selectValue, radioValue, dateValue);
    console.log(newTodoValue);
    setOpenModal(false);
  };

  const onClickCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
    console.log(event.target.value); // para verificar el valor seleccionado
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
        <div className="TodoForm-title">
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
      <div>
        <label htmlFor="date-picker">Due Date</label>
        <TodoCalendarPicker
          calendarNameValue={dateValue}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="selector">Status</label>
        <select id="selector" value={selectValue} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Priority</label>
        <TodoRadio
          radioValue={radioValue}
          radioNameValue="low"
          radioName="Low"
          onChange={handleRadioChange}
        />
        <TodoRadio
          radioValue={radioValue}
          radioNameValue="medium"
          radioName="Medium"
          onChange={handleRadioChange}
        />
        <TodoRadio
          radioValue={radioValue}
          radioNameValue="high"
          radioName="High"
          onChange={handleRadioChange}
        />
      </div>
      <div className="TodoForm-button">
        <button className="TodoForm-create-task" type="submit">
          Create new task
        </button>
      </div>
    </form>
  );
}
