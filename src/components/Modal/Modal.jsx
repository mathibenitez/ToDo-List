import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { Cross } from 'akar-icons'
import style from './Modale.module.css'

const CANCEL_KEYS = ['Escape']

export const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    const callback = evt => {
      const keyPressed = evt.key
      const hasCancelModal = CANCEL_KEYS.includes(keyPressed)

      if (hasCancelModal) closeModal()
    }

    document.addEventListener('keyup', callback)

    return () => document.removeEventListener('keyup', callback)
  }, [])

  if (!children) return null

  return createPortal(
    <div className={style.background}>
      <div className={style.modalContent}>
        <button className={style.cancelModal} onClick={closeModal}>
          <Cross />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}
