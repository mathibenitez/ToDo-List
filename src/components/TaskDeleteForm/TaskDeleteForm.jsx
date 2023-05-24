import style from './TaskDeleteForm.module.css'

export const TaskDeleteForm = ({
  handleDeleteTask,
  taskName,
  handleCancel
}) => {
  return (
    <>
      <p className={style.text}>Quieres eliminar la tarea {taskName}?</p>
      <div className={style.buttons_form}>
        <button className={style.cancel} onClick={handleCancel}>
          Cancel
        </button>
        <button className={style.delete} onClick={handleDeleteTask}>
          Delete
        </button>
      </div>
    </>
  )
}
