import topScoresReducer from './topScoresReducer';
import { ActionTypesScoreBoard } from '../../constants/enums/actionTypesScoreBoard';

describe('topScoresReducer', () => {
  it('should return the initial state', () => {
    expect(topScoresReducer(undefined, {})).toEqual({
      scores: [],
    });
  });

  it('should handle ADD_SCORE action', () => {
    const initialState = {
      scores: [
        { score: 3 },
        { score: 2 },
        { score: 1 },
      ],
    };

    const newScore = { score: 4 };

    const action = {
      type: ActionTypesScoreBoard.ADD_SCORE,
      payload: newScore,
    };

    const expectedState = {
      scores: [
        { score: 1 },
        { score: 2 },
        { score: 3 },
        { score: 4 },
      ],
    };

    expect(topScoresReducer(initialState, action)).toEqual(expectedState);
  });

  it('should keep only top 5 scores', () => {
    const initialState = {
      scores: [
        { score: 3 },
        { score: 2 },
        { score: 1 },
        { score: 5 },
        { score: 4 },
      ],
    };

    const newScore = { score: 0 };

    const action = {
      type: ActionTypesScoreBoard.ADD_SCORE,
      payload: newScore,
    };

    const expectedState = {
      scores: [
        { score: 0 },
        { score: 1 },
        { score: 2 },
        { score: 3 },
        { score: 4 },
      ],
    };

    expect(topScoresReducer(initialState, action)).toEqual(expectedState);
  });
});