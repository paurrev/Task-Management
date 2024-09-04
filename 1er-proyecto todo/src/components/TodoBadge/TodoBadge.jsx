export function TodoBadge({ classContainer, className, icon, valueText }) {
  return (
    <div className={`${classContainer} ${className}`}>
      {icon && <>{icon}</>}
      <span>{valueText}</span>
    </div>
  );
}
