import React, { useEffect } from 'react';
import image1 from '../assets/img/cards/image1.png'
import image2 from '../assets/img/cards/image2.png'
import image3 from '../assets/img/cards/image3.png'
import image4 from '../assets/img/cards/image4.png'

import useTheme from '../hooks/useTheme'
import Card from '../components/card/Card'
import styled from 'styled-components';
import Timer from '../components/timer/Timer'
import { useGameLogic } from '../hooks/useGameLogic';

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
  const {
    time,
    startTimer,
    boardState,
    lockedCards,
    shuffledImages,
    handleCardClick,
    stopTimer,
  } = useGameLogic([image1,
    image2,
    image3,
    image4,]);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  const onClickCard = (cardIndex) => {
    handleCardClick(cardIndex)
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
    </div>
  );
};

export default GameBoardContainer;
