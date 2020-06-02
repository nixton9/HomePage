import React, { useEffect, useRef } from 'react'
import { ModalStyles } from '../styles/ModalStyles'

interface ModalProps {
  children: React.ReactNode
  title: string
  open: boolean
  closeModal: () => void
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open,
  closeModal
}) => {
  const modalOverlay = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (modalOverlay && modalOverlay.current) {
      modalOverlay.current.addEventListener('click', closeModal)

      return () =>
        modalOverlay.current?.removeEventListener('click', closeModal)
    }
  }, [])

  return (
    <>
      <ModalStyles className={open ? 'open' : ''}>
        <div className="modal-overlay" ref={modalOverlay} />
        <div className="modal">
          <h2 className="modal__title">{title}</h2>
          <div className="modal__content">{children}</div>
        </div>
      </ModalStyles>
    </>
  )
}
