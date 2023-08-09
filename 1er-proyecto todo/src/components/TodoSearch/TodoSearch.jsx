import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../App/logic';

export function TodoSearch() {
  const { inputValue, setInputValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <div className="todo-header">
      <input
        className="todo-header_search"
        placeholder="Create a new task..."
        value={inputValue}
        onChange={onSearchValueChange}
        autoFocus
      />
      <span className="material-symbols-outlined todo-header_icon">search</span>
    </div>
  );
}
