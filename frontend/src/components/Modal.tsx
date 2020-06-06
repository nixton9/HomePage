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
    const overlayCurrent = modalOverlay.current
    if (modalOverlay && overlayCurrent) {
      overlayCurrent.addEventListener('click', closeModal)

      return () => overlayCurrent?.removeEventListener('click', closeModal)
    }
  }, [closeModal])

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
