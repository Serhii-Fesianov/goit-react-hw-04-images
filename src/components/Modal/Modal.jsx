import React, { useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({ largeImageURL, tags, closeModal }) => {
  const handleClickBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal('');
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={s.overlay} onClick={handleClickBackdrop}>
      <div className={s.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
