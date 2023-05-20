import './TodoList.css'

export function TodoList(props) {
  return (
    <section className='todo-list'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}
