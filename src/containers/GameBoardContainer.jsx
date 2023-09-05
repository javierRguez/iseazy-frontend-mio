import image1 from '../assets/img/cards/image1.png'
import image2 from '../assets/img/cards/image2.png'
import image3 from '../assets/img/cards/image3.png'
import image4 from '../assets/img/cards/image4.png'
import image5 from '../assets/img/cards/image5.png'
import image6 from '../assets/img/cards/image6.png'
import image7 from '../assets/img/cards/image7.png'
import image8 from '../assets/img/cards/image8.png'
import image9 from '../assets/img/cards/image9.png'
import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/card/Card'
import styled from 'styled-components';

const GameBoardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;

const GameBoardContainer = () => {
  const isBoardLocked = useRef(false);
  const [boardState, setBoardState] = useState(new Array(18).fill(false));
  const [flippedCards, setFlippedCards] = useState([]);
  const [lockedCards, setLockedCards] = useState(new Set());
  const [shuffledImages, setShuffledImages] = useState([]);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // Duplicamos las imágenes para llenar las 18 cartas
  useEffect(() => {
    // Barajar las imágenes y establecer el estado solo cuando el componente se monte
    setShuffledImages([...images, ...images].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (index) => {
    // Si la carta ya está bloqueada, no hacemos nada
    if (lockedCards.has(index) || isBoardLocked.current) {
      return;
    }

    // Volteamos la carta
    const newBoardState = [...boardState];
    newBoardState[index] = !newBoardState[index];
    setBoardState(newBoardState);
    if (flippedCards.length === 1) {
      isBoardLocked.current = true  // Bloquea el tablero
    }
    // Agregamos la carta a la lista de cartas volteadas
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (shuffledImages[firstCard] === shuffledImages[secondCard]) {
        // Las imágenes coinciden, bloqueamos las cartas
        setLockedCards(new Set([...lockedCards, firstCard, secondCard]));
        isBoardLocked.current = false
      } else {
        // Las imágenes no coinciden, volvemos a voltear las cartas después de un breve retraso
        setTimeout(() => {
          const newBoardState = [...boardState];
          newBoardState[firstCard] = false;
          newBoardState[secondCard] = false;
          setBoardState(newBoardState);
          isBoardLocked.current = false
        }, 1000);
      }
      // Limpiamos la lista de cartas volteadas
      setFlippedCards([]);
      //isBoardLocked.current = false
    }
  }, [flippedCards]);

  return (
    <GameBoardGrid>
      {shuffledImages.map((image, index) => (
        <Card
          key={index}
          flipped={boardState[index]}
          locked={lockedCards.has(index)}
          imageSrc={image}
          number={index + 1}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </GameBoardGrid>
  );
};

export default GameBoardContainer;
