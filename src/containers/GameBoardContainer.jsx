import React, { useEffect, useState } from 'react';
import image1 from '../assets/img/cards/image1.png'
import image2 from '../assets/img/cards/image2.png'


import useTheme from '../hooks/useTheme'
import Card from '../components/card/Card'
import styled from 'styled-components';
import Timer from '../components/timer/Timer'
import { useGameLogic } from '../hooks/useGameLogic';
import FinishGameModal from '../components/modal/FinishGameModal';

const GameBoardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;

const TimerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 3rem;
`;

const GameBoardContainer = () => {
  const { currentTheme } = useTheme()
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    time,
    startTimer,
    boardState,
    lockedCards,
    shuffledImages,
    handleCardClick,
    stopTimer,
    resetGame,
  } = useGameLogic([image1,
    image2,]);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);



  useEffect(() => {
    if (lockedCards.size === 4) {  // Asume que tienes 18 cartas

      setModalOpen(true);
    }
  }, [lockedCards]);

  const onClickCard = (cardIndex) => {
    handleCardClick(cardIndex)
  }

  const onCloseModal = () => {
    setModalOpen(false)
  }

  const onClickRestartGame = () => {
    onCloseModal()
    resetGame()
  }

  return (
    <div>
      <TimerContainer>
        <Timer time={time} currentTheme={currentTheme} />
      </TimerContainer>
      <GameBoardGrid>
        {shuffledImages.map((image, index) => (
          <Card
            key={index}
            flipped={boardState[index]}
            locked={lockedCards.has(index)}
            imageSrc={image}
            number={index + 1}
            onClick={() => onClickCard(index)}
          />
        ))}
      </GameBoardGrid>
      <FinishGameModal time={time} isModalOpen={isModalOpen} onClose={onCloseModal} onClickButton={onClickRestartGame} />
    </div>
  );
};

export default GameBoardContainer;
