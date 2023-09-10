import { act, renderHook } from '@testing-library/react-hooks';
import { useGameLogic } from './useGameLogic';

describe('useGameLogic', () => {
  let initialImages;

  beforeEach(() => {
    initialImages = ['img1', 'img2', 'img3'];
  });

  it('should start with correct initial state', () => {
    const { result } = renderHook(() => useGameLogic(initialImages));

    expect(result.current.time).toBe(0);
    expect(result.current.boardState.length).toBe(6);
    expect(result.current.lockedCards.size).toBe(0);
    expect(result.current.shuffledImages.length).toBe(6);
  });

  it('should start the timer', () => {
    const { result } = renderHook(() => useGameLogic(initialImages));

    act(() => {
      result.current.startTimer();
    });

    expect(result.current.time).toBeGreaterThanOrEqual(0);
  });

  it('should stop the timer', () => {
    jest.useFakeTimers(); // Usa los temporizadores falsos de Jest
    const { result } = renderHook(() => useGameLogic(initialImages));

    act(() => {
      result.current.startTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000); // Avanza el temporizador en 1 segundo
    });

    expect(result.current.time).toBe(1); // Verifica que el temporizador se incrementó

    act(() => {
      result.current.stopTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000); // Intenta avanzar el temporizador en 1 segundo más
    });

    expect(result.current.time).toBe(1); // Verifica que el temporizador se detuvo y el tiempo no se incrementó

    jest.useRealTimers(); // Vuelve a usar los temporizadores reales
  });

  it('should handle card click correctly', () => {
    const { result } = renderHook(() => useGameLogic(initialImages));

    act(() => {
      result.current.handleCardClick(0);
    });

    expect(result.current.boardState[0]).toBe(true);
  });

  it('should reset the game', () => {
    const { result } = renderHook(() => useGameLogic(initialImages));

    act(() => {
      result.current.resetGame();
    });

    expect(result.current.time).toBe(0);
    expect(result.current.boardState.length).toBe(6);
    expect(result.current.lockedCards.size).toBe(0);
    expect(result.current.shuffledImages.length).toBe(6);
  });
});