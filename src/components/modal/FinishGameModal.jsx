import React from 'react';
import { t } from 'i18next'
import Modal from './Modal';
import StartButton from '../start-button/StartButton';
import useTheme from '../../hooks/useTheme';
import styled from 'styled-components';
import Timer from '../timer/Timer';


const FinishLabel = styled.p`
  color: ${(props) => props.theme.text.primary};
  font-size:2rem;
  font-weight: 700;
  
`;

const FinishGameModal = ({ isModalOpen, onClose, onClickButton, time }) => {
  const { currentTheme } = useTheme()

  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <div className='flex justify-center items-center flex-col py-7 px-12'>
        <div className='flex space-x-12 items-center mb-8'>
          <FinishLabel theme={currentTheme}>{t('finishModal.finish')}</FinishLabel>
          <Timer time={time} currentTheme={currentTheme} />
        </div>
        <div>
          <StartButton
            currentTheme={currentTheme}
            label={t('finishModal.playAgainButton')}
            onClick={onClickButton}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FinishGameModal;