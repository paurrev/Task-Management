import { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../App/logic';

export function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <section className="todo-header-task">
      <h2 className="todo-header_title">Your tasks</h2>
      <p className="todo-header-completed">
        {completedTodos} of {totalTodos} completed
      </p>
    </section>
  );
}
