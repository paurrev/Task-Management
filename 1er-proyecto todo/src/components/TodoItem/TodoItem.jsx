import './TodoItem.css';
import { IconBin } from '../../assets/Icons';

export function TodoItem({ onCompleted, completed, text, onDeleted }) {
  return (
    <li className="todo-item">
      <div className='Todo-item--todo-task'>
        <label className={`container ${completed ? 'checked' : ''}`}>
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={onCompleted}
          />
          <div className="checkmark"></div>
        </label>
        <p
          className={`todo-item_text ${
            completed && 'todo-item_text--completed'
          }`}
        >
          {text}
        </p>
      </div>

      <button className="todo-item_delete" onClick={onDeleted}>
        <IconBin />
      </button>
    </li>
  );
}
