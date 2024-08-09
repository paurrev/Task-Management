import './TodoCards.css'

function TodoCards({ icon, number, description, backgroundName }) {
  return (
    <div className={`todo-card__container ${backgroundName}`}>
      {icon}
      <div className="todo-card__text">
        <span className="todo-card__number">{number}</span>
        <span className="todo-card__description">{description}</span>
      </div>
    </div>
  );
}

export { TodoCards };
