export function TodoRadio({ radioValue, radioNameValue, radioName, onChange }) {
  return (
    <label htmlFor={radioNameValue}>
      <input
        type="radio"
        name="radioPriority"
        value={radioNameValue}
        checked={radioValue === radioNameValue}
        onChange={onChange}
        id={radioNameValue}
      />
      <span>{radioName}</span>
    </label>
  );
}
