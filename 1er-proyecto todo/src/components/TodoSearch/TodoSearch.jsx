import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext/TodoProvider';
import { IconSearch } from '../../assets/Icons';

function TodoSearch() {
  const { inputValue, setInputValue } = useContext(TodoContext);

  return (
    <div className="todo-search">
      <IconSearch size={24} color="var(--black-light)" stroke={3}/>
      <input
        className="todo-search__input"
        placeholder="Search Tasks"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        autoFocus
      />
    </div>
  );
}

export { TodoSearch };
