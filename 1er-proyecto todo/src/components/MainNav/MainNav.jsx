import { useContext } from 'react';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoContext } from '../../TodoContext/TodoProvider';
import './MainNav.css';

function MainNav() {
  const { setOpenModal } = useContext(TodoContext);

  return (
    <article className="main-nav--container">
      <div className="main-nav--content">
        <h2 className="main-nav--title">My Tasks</h2>
        <CreateTodoButton setOpenModal={setOpenModal} />
      </div>
      <TodoSearch />
    </article>
  );
}

export { MainNav };
