import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoProvider";
import { MainNav } from "../MainNav/MainNav";
import { TodoError } from '../TodoError/TodoError.jsx';
import { TodoLoading } from '../TodoLoading/Todoloading.jsx';
import { TodosEmpty } from '../TodoEmpty/TodoEmpty.jsx';
import { TodoItem } from '../TodoItem/TodoItem.jsx';
import { TodoList } from '../TodoList/TodoList.jsx';


function MainContent() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = useContext(TodoContext);

  return (
    <section className="main-content">
      <MainNav/>
      <TodoList>
        {error ? <TodoError /> : null}
        {loading ? <TodoLoading lists={4} /> : null}
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
    </section>
  );
}

export { MainContent };
