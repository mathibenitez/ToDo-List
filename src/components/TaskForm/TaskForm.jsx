import React, { useState } from 'react'
import { validTask } from '../../utils/validateTask'
// import './TaskForm.module.css'
import style from './TaskForm.module.css'

export const TaskForm = ({ addTask }) => {
  const [inputState, setInputState] = useState({
    value: '',
    error: undefined
  })

  const handleSubmit = e => {
    e.preventDefault()

    addTask(inputState.value)

    setInputState({
      value: '',
      error: undefined
    })
  }

  const onChangeHandle = value => {
    const error = validTask(value)

    setInputState({ value, error })
  }

  const isButtonDisabled =
    Boolean(inputState.error) || inputState.value.trim() === ''

  return (
    <div>
      <form className={style.form_format} onSubmit={handleSubmit}>
        <input
          className={style.input_add_task}
          placeholder="task example..."
          value={inputState.value}
          onChange={e => onChangeHandle(e.target.value)}
        ></input>
        <button
          className={style.button_add_task}
          // disabled={isButtonDisabled}
          type="submit"
        >
          Add task
        </button>
      </form>
      {inputState.error && (
        <p className={style.error_message}>{inputState.error}</p>
      )}
    </div>
  )
}
