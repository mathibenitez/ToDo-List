import React, { useState } from 'react'
import { validTask } from '../../utils/validateTask'

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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="task example..."
          value={inputState.value}
          onChange={e => onChangeHandle(e.target.value)}
        ></input>
        {inputState.error && <p>{inputState.error}</p>}
        <button disabled={isButtonDisabled} type="submit">
          Add task
        </button>

        {/* <AddTask onClick={handleSubmit}></AddTask> */}
      </form>
    </div>
  )
}
