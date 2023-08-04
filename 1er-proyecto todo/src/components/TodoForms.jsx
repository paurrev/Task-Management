
export function TodoForm() {
  return (
    <form>
      <label>Escribe un nuevo TODO</label>
      <textarea/>
      <div>
        <button
          type="button"
        >
          Cancel
        </button>
        <button
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  )
}