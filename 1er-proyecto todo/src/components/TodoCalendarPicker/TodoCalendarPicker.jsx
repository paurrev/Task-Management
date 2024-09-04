export function TodoCalendarPicker({
  calendarNameValue,
  onChange,
}) {
  return (
    <label htmlFor={calendarNameValue}>
      <input
        type="date"
        name="radioPriority"
        value={calendarNameValue}
        onChange={onChange}
        id={calendarNameValue}
      />
    </label>
  );
}