import './TodoItem.css'
export function TodoItem(props) {
  return (
    <li className="todo-item">
      <input className={"todo-item_checkbox"} type="checkbox" />
      <p className={`todo-item_text ${props.completed && 'todo-item_text--completed'}`}>{props.text}</p>
      <span className="todo-item_delete">X</span>
    </li>
  );
}
