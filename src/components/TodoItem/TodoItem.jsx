import './TodoItem.css';
import {
  IconBin,
  IconCalendar,
  IconCircleCheck,
  IconHighPriority,
  IconLowPriority,
  IconMediumPriority,
  IconProgress,
  IconTodo,
} from '../../assets/Icons';
import { TodoBadge } from '../TodoBadge/TodoBadge';
import '../../variables.css';

export function TodoItem({
  onCompleted,
  completed,
  textTodo,
  onDeleted,
  status,
  priority,
  dueDate,
}) {
  const statusMap = {
    todo: {
      icon: <IconTodo size={20} color="var(--layout-foreground)" />,
      text: 'Todo',
    },
    'in-progress': {
      icon: <IconProgress size={20} color="var(--layout-foreground)" />,
      text: 'In Progress',
    },
    completed: {
      icon: <IconCircleCheck size={20} color="var(--layout-foreground)" />,
      text: 'Completed',
    },
  };

  const priorityMap = {
    low: {
      icon: (
        <IconLowPriority
          size={24}
          stroke={2}
          color="var(--layout-foreground)"
        />
      ),
      text: 'Low',
    },
    medium: {
      icon: (
        <IconMediumPriority
          size={24}
          stroke={2}
          color="var(--layout-foreground)"
        />
      ),
      text: 'Medium',
    },
    high: {
      icon: (
        <IconHighPriority
          size={24}
          stroke={2}
          color="var(--layout-foreground)"
        />
      ),
      text: 'High',
    },
  };

  return (
    <li className="todo-item">
      <div className="Todo-item--todo-task">
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
          {textTodo}
        </p>
      </div>
      <div className="todo-item--badges">
        {status &&
        (
            <TodoBadge
              classContainer="status-badges"
              className={status}
              icon={statusMap[status]?.icon}
              valueText={statusMap[status]?.text}
            />
          )}
        {priority &&(
            <TodoBadge
              classContainer="priority-badges"
              className={priority}
              icon={priorityMap[priority]?.icon}
              valueText={priorityMap[priority]?.text}
            />
          )}
        {dueDate &&(
          <TodoBadge
            classContainer="date-badges"
            className="date"
            icon={<IconCalendar size={24} color="var(--layout-foreground)" />}
            valueText={dueDate}
          />
        )}
        <button className="todo-item_delete" onClick={onDeleted}>
          <IconBin />
        </button>
      </div>
    </li>
  );
}
