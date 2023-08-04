import { TodoCounter } from './components/TodoCounter.jsx';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { TodoList } from './components/TodoList.jsx';
import { CreateTodoButton } from './components/CreateTodoButton.jsx';
import { useContext } from 'react';
import { TodoContext } from './components/Context/index.jsx';
import { Modal } from './Modal/modal.jsx';
import { TodoForm } from './components/TodoForms.jsx';


export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  
  return (
    <>
      <section className="Todo">
        <TodoSearch />
        <TodoCounter />
        <TodoList>
          {error && <p>Desespérate, hubo un error 😢</p>}
          {loading && <p>Estamos cargando... ⌛</p>}
          {!loading && !searchedTodos.length && <p>Crea tu primer TODO ✏️</p>}
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
            <TodoForm/>
          </Modal>
        )}
        <CreateTodoButton  setOpenModal={setOpenModal}/>
      </section>
    </>
  );
}