import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import image1 from '../assets/img/cards/image1.png'
import image2 from '../assets/img/cards/image2.png'


import useTheme from '../hooks/useTheme'
import Card from '../components/card/Card'
import styled from 'styled-components';
import Timer from '../components/timer/Timer'
import { useGameLogic } from '../hooks/useGameLogic';
import FinishGameModal from '../components/modal/FinishGameModal';
import { ActionTypesScoreBoard } from '../constants/enums/actionTypesScoreBoard';
import { formatDateTime } from '../utils/utils';

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
  const dispatch = useDispatch();
  const { currentTheme } = useTheme()
  const [isModalOpen, setModalOpen] = useState(false);
  const images = [image1,
    image2]
  const {
    time,
    startTimer,
    boardState,
    lockedCards,
    shuffledImages,
    handleCardClick,
    stopTimer,
    resetGame,
  } = useGameLogic(images);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);



  useEffect(() => {
    if (lockedCards.size === images.length * 2) {
      onFinishGame()

    }
  }, [lockedCards]);

  const onClickCard = (cardIndex) => {
    handleCardClick(cardIndex)
  }

  const onCloseModal = () => {
    setModalOpen(false)
    resetGame()
  }

  const onClickRestartGame = () => {
    onCloseModal()
  }

  const onFinishGame = () => {
    const newScore = { date: formatDateTime(new Date()), score: time }
    dispatch({ type: ActionTypesScoreBoard.ADD_SCORE, payload: newScore });
    setModalOpen(true);
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
