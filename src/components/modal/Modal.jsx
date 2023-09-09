import React from 'react';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:  ${(props) => props.theme.background.modalOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.background.modal};
  border-radius: 20px;
  max-width: fit-content;
  width: 100%;
  z-index: 10000;
`;

const Modal = ({ isOpen, onClose, children }) => {
  const { currentTheme } = useTheme()
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose} theme={currentTheme}>
      <ModalContent onClick={(e) => e.stopPropagation()} theme={currentTheme}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;