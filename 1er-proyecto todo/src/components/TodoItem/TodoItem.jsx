import './TodoItem.css';

export function TodoItem({onCompleted, completed, text, onDeleted}) {
  return (
    <li className="todo-item">
      <label className={`container ${completed ? 'checked' : ''}`}>
        <input type="checkbox" defaultChecked={completed} onClick={onCompleted}/>
        <div className="checkmark"></div>
      </label>
      <p
        className={`todo-item_text ${completed && 'todo-item_text--completed'}`}
      >
        {text}
      </p>
      <span className="todo-item_delete" onClick={onDeleted}>
        X
      </span>
    </li>
  );
}
