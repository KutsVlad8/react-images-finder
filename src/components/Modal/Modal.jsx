import React, { useEffect } from 'react';
import { Overlay, ModalContent } from './Modal.styled';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    // console.log('render');
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      // console.log('unrender');
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Overlay>
  );
};
