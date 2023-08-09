import './TodoItem.css';
export function TodoItem(onCompleted, completed, text, onDeleted) {
  return (
    <li className="todo-item">
      <input
        className={'todo-item_checkbox'}
        type="checkbox"
        onClick={onCompleted}
      />
      <p
        className={`todo-item_text ${
          completed && 'todo-item_text--completed'
        }`}
      >
        {text}
      </p>
      <span 
      className="todo-item_delete" 
      onClick={onDeleted}>
        X
      </span>
    </li>
  );
}
