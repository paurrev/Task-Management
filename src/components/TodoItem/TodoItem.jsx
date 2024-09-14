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
  id
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

  const onClickTest = (event) => {
    console.log(event)
  }

  return (
    <li className="todo-item" onClick={onClickTest}>
      <div className="Todo-item--todo-task">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={onCompleted}
            className="check"
            id={`todo-${id}`}
          />
          <label
            className={`container ${completed ? 'checked' : ''}`}
            for={`todo-${id}`}
          >
            <svg width="45" height="45" viewBox="0 0 95 95">
              <rect
                x="30"
                y="20"
                width="50"
                height="50"
                stroke="currentColor"
                fill="none"
                strokeWidth="3"
                className="square"
                rx="15"
                ry="15"
              ></rect>
              <g transform="translate(6,-955.36222)">
                <path
                  d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                  stroke="#14B858"
                  strokeWidth="3"
                  fill="none"
                  className="path1"
                ></path>
              </g>
            </svg>
          </label>
        </div>
        <p
          className={`todo-item_text ${
            completed && 'todo-item_text--completed'
          }`}
        >
          {textTodo}
        </p>
      </div>
      <div className="todo-item--badges">
        {status && (
          <TodoBadge
            classContainer="status-badges"
            className={status}
            icon={statusMap[status]?.icon}
            valueText={statusMap[status]?.text}
          />
        )}
        {priority && (
          <TodoBadge
            classContainer="priority-badges"
            className={priority}
            icon={priorityMap[priority]?.icon}
            valueText={priorityMap[priority]?.text}
          />
        )}
        {dueDate && (
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
