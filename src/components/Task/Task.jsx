import { Check, Pencil, TrashCan } from 'akar-icons'
import React, { useContext, useState } from 'react'
import { Modal } from '../Modal'
import { TaskDeleteForm } from '../TaskDeleteForm'
import { TaskProvider } from '../TodoWrapper/TodoWrapper'
import styles from './Task.module.css'

export const Task = ({ id, name, isCompleted }) => {
  const { onDeleteTask, onEditTask, onToggleComplete } =
    useContext(TaskProvider)
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(name)

  const handleSubmit = e => {
    e.preventDefault()

    onEditTask(id, value)
    setIsEditing(false)
  }

  /* -------- */
  const [contentModal, setContentModal] = useState()

  return (
    <div key={id} className={styles.task_icons_format}>
      {!isEditing ? (
        <div className={styles.task}>
          <div className={styles.completed_format}>
            <p
              onClick={() => onToggleComplete(id)}
              className={`${styles.task_text} ${
                isCompleted ? styles.completed : ''
              }`}
            >
              {name}
            </p>
            {isCompleted && (
              <span className={styles.task_completed}>Completed!</span>
            )}
          </div>
        </div>
      ) : (
        <div>
          <form className={styles.check_edit} onSubmit={handleSubmit}>
            <input
              className={styles.input_edit_task}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button type="submit">
              <Check strokeWidth={3}></Check>
            </button>
          </form>
        </div>
      )}
      <div className={styles.icons_task}>
        <div>
          <button onClick={() => setIsEditing(lastvalue => !lastvalue)}>
            <Pencil strokeWidth={2}></Pencil>
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              setContentModal(
                <TaskDeleteForm
                  taskName={name}
                  handleDeleteTask={() => onDeleteTask(id)}
                  handleCancel={() => setContentModal()}
                />
              )
            }
          >
            <TrashCan strokeWidth={2}></TrashCan>
          </button>
        </div>
      </div>
      <Modal closeModal={() => setContentModal()}>{contentModal}</Modal>
    </div>
  )
}
