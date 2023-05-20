import './TodoCounter.css'

export function TodoCounter() {
  return (
    <section className="todo-header-task">
      <h2 className='todo-header_title'>Your tasks</h2>
      <p className='todo-header-completed'>1 of 3 completed</p>
    </section>
  );
}