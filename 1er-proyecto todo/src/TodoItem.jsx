import './TodoItem.css';
export function TodoItem(props) {
  const onCompleted = () => {
    alert('Ya completaste el todo ' + props.text);
  };
  const onDeleted = () => {
    alert('Borraste el todo ' + props.text);
  };
  return (
    <li className="todo-item">
      <input
        className={'todo-item_checkbox'}
        type="checkbox"
        onClick={onCompleted}
      />
      <p
        className={`todo-item_text ${
          props.completed && 'todo-item_text--completed'
        }`}
      >
        {props.text}
      </p>
      <span className="todo-item_delete" onClick={onDeleted}>
        X
      </span>
    </li>
  );
}
