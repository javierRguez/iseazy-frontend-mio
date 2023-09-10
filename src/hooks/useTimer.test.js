import { renderHook, act } from '@testing-library/react-hooks';
import { useTimer } from './useTimer';

describe('useTimer', () => {
  it('should initiate with a time of 0', () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.time).toBe(0);
  });

  it('should increment time after starting the timer', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.startTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.time).toBe(1);
  });

  it('should stop the timer', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.startTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    act(() => {
      result.current.stopTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.time).toBe(1);
  });

  it('should reset the timer', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.startTimer();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    act(() => {
      result.current.resetTimer();
    });

    expect(result.current.time).toBe(0);
  });
});