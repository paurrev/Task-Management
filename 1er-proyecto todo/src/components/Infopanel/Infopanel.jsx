import { IconCircleCheck, IconProgress, IconUpcoming } from '../../assets/Icons';
import { TodoCards } from '../TodoCards/TodoCards';
import '../../variables.css';
import './Infopanel.css';

function Infopanel() {
  return (
    <section className="info-panel">
      <h1 className="info-panel--title">Task Management</h1>
      <div className='info-panel--cards'>
        <TodoCards
          number=""
          description=""
          backgroundName="todo-card--white"
        />
        <TodoCards
          icon={
            <IconCircleCheck
              size={24}
              color="var(--white)"
              className="info-panel--icon"
            />
          }
          number={20}
          description="Upcoming Tasks"
          backgroundName="todo-card--blue"
        />
        <TodoCards
          icon={
            <IconProgress
              size={24}
              color="var(--white)"
              stroke={2}
              className="info-panel--icon"
            />
          }
          number={20}
          description="In Progress"
          backgroundName="todo-card--orange"
        />
        <TodoCards
          icon={
            <IconUpcoming
              size={24}
              color="var(--white)"
              className="info-panel--icon"
            />
          }
          number={20}
          description="Completed"
          backgroundName="todo-card--green"
        />
      </div>
    </section>
  );
}

export { Infopanel };
