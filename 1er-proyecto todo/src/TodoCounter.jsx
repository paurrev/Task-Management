import './TodoCounter.css'

export function TodoCounter({completedTodos, totalTodos}) {
  return (
    <section className="todo-header-task">
      <h2 className='todo-header_title'>Your tasks</h2>
      <p className='todo-header-completed'>{completedTodos} of {totalTodos} completed</p>
    </section>
  );
}