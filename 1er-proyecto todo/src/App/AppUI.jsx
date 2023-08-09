import { TodoCounter } from '../components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.jsx';
import { TodoItem } from '../components/TodoItem/TodoItem.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.jsx';
import { useContext } from 'react';
import { TodoContext } from './logic.jsx';
import { Modal } from '../Modal/modal.jsx';
import { TodoForm } from '../components/TodoForms/TodoForms.jsx';

export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <section className="Todo">
        <TodoSearch />
        <TodoCounter />
        <TodoList>
          {error ? <p>Desespérate, hubo un error 😢</p> : null}
          {loading ? <p>Estamos cargando... ⌛</p> : null}
          {!loading && !searchedTodos.length ? <p>Crea tu primer TODO ✏️</p> : null}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.text)}
              onDeleted={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}2
        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>
    </>
  );
}
