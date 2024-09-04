import {
  IconCircleCheck,
  IconProgress,
  IconTotal,
  IconUpcoming,
} from '../../assets/Icons';
import { TodoCards } from '../TodoCards/TodoCards';
import '../../variables.css';
import './Infopanel.css';
import { useContext } from 'react';
import { TodoContext } from '../../TodoProvider/TodoProvider';

function Infopanel() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <section className="info-panel">
      <h1 className="info-panel--title">Task Management</h1>
      <div className="info-panel--cards">
        <TodoCards
          icon={
            <IconTotal
              size={24}
              color="var(--default-400)"
              className="info-panel--icon"
            />
          }
          number={totalTodos}
          description="Total"
          backgroundName="todo-card--layout-foreground"
          colorText="color-dark"
        />
        <TodoCards
          icon={
            <IconUpcoming
              size={24}
              color="var(--layout-foreground)"
              className="info-panel--icon"
            />
          }
          number={0}
          description=""
          backgroundName="todo-card--blue"
        />
        <TodoCards
          icon={
            <IconProgress
              size={24}
              color="var(--layout-foreground)"
              stroke={2}
              className="info-panel--icon"
            />
          }
          number={0}
          description=""
          backgroundName="todo-card--orange"
        />
        <TodoCards
          icon={
            <IconCircleCheck
              size={24}
              color="var(--layout-foreground)"
              className="info-panel--icon"
            />
          }
          number={completedTodos}
          description="Completed"
          backgroundName="todo-card--green"
        />
      </div>
    </section>
  );
}

export { Infopanel };
