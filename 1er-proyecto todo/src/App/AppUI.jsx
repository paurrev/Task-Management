import { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch/TodoSearch.jsx';
import { TodoItem } from '../components/TodoItem/TodoItem.jsx';
import { TodoList } from '../components/TodoList/TodoList.jsx';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.jsx';
import { TodoContext } from '../TodoContext/TodoProvider.jsx';
import { Modal } from '../Modal/modal.jsx';
import { TodoForm } from '../components/TodoForms/TodoForms.jsx';
import { TodoError } from '../components/TodoError/TodoError.jsx';
import { TodoLoading } from '../components/TodoLoading/Todoloading.jsx';
import { TodosEmpty } from '../components/TodoEmpty/TodoEmpty.jsx';

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
          {error ? null : <TodoError />}
          {loading ? (
            <p>
              {' '}
              <TodoLoading />{' '}
            </p>
          ) : null}
          {!loading && !searchedTodos.length ? <TodosEmpty /> : null}
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
        )}
        2
        <CreateTodoButton setOpenModal={setOpenModal} />
      </section>
    </>
  );
}
