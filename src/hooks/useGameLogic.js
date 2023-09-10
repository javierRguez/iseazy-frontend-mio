import { useState, useEffect, useRef } from 'react';
import { useTimer } from './useTimer';

export const useGameLogic = (initialImages) => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const { time, startTimer, stopTimer, resetTimer } = useTimer()
  const [boardState, setBoardState] = useState(new Array(initialImages.length * 2).fill(false));
  const [flippedCards, setFlippedCards] = useState([]);
  const [lockedCards, setLockedCards] = useState(new Set());
  const isBoardLocked = useRef(false);

  useEffect(() => {
    shufflingCards()
  }, []);

  useEffect(() => {
    if (lockedCards.size === initialImages.length * 2) {
      stopTimer();
    }
  }, [lockedCards]);

  useEffect(() => {
    if (lockedCards.size === initialImages.length * 2) {
      stopTimer()
    }
  }, [lockedCards]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (shuffledImages[firstCard] === shuffledImages[secondCard]) {
        setLockedCards(new Set([...lockedCards, firstCard, secondCard]));
        isBoardLocked.current = false
      } else {
        setTimeout(() => {
          const newBoardState = [...boardState];
          newBoardState[firstCard] = false;
          newBoardState[secondCard] = false;
          setBoardState(newBoardState);
          isBoardLocked.current = false
        }, 1000);
      }

      setFlippedCards([]);
    }
  }, [flippedCards]);

  const shufflingCards = () => {
    setShuffledImages([...initialImages, ...initialImages].sort(() => Math.random() - 0.5));
  }

  const handleCardClick = (index) => {
    if (lockedCards.has(index) || isBoardLocked.current || flippedCards.includes(index)) {
      return;
    }
    const newBoardState = [...boardState];
    newBoardState[index] = !newBoardState[index];
    setBoardState(newBoardState);

    if (flippedCards.length === 1) {
      isBoardLocked.current = true;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
  };

  const resetGame = () => {
    setFlippedCards([]);
    setBoardState(new Array(initialImages.length * 2).fill(false));

    setTimeout(() => {
      shufflingCards()
      setLockedCards(new Set());
      resetTimer();
      startTimer()
    }, 800);

  };

  return {
    time,
    startTimer,
    stopTimer,
    boardState,
    lockedCards,
    shuffledImages,
    handleCardClick,
    resetGame
  };
};