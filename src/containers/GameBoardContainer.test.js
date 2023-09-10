
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import GameBoardContainer from './GameBoardContainer';
import { topScoresState } from '../store/states/topScoresState';
import { ThemeProvider } from '../contexts/ThemeContext';

// Mock the useDispatch hook from react-redux
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../hooks/useGameLogic', () => ({
  useGameLogic: () => ({
    time: 100,
    startTimer: jest.fn(),
    boardState: Array(18).fill(false),
    lockedCards: new Set(),
    shuffledImages: Array(18).fill('image.png'),
    handleCardClick: jest.fn(),
    stopTimer: jest.fn(),
    resetGame: jest.fn(),
  }),
}));

describe('<GameBoardContainer />', () => {
  const mockStore = configureStore([]);
  const store = mockStore({ topScores: { ...topScoresState } });

  beforeEach(() => {
    render(
      <ThemeProvider>
        <Provider store={store}>
          <GameBoardContainer />
        </Provider>
      </ThemeProvider>
    );
  });

  it('should render all the Card components', () => {
    expect(screen.getAllByTestId('card-test').length).toBe(18);
  });

});