import { ActionTypesScoreBoard } from "../../constants/enums/actionTypesScoreBoard"
import { topScoresState } from "../states/topScoresState";

const topScoresReducer = (state = topScoresState, action) => {
  switch (action.type) {
    case ActionTypesScoreBoard.ADD_SCORE: {
      const newScore = action.payload;
      const updatedScores = [...state.scores, newScore];
      updatedScores.sort((a, b) => a.score - b.score);
      const top5Scores = updatedScores.slice(0, 5);

      return {
        ...state,
        scores: top5Scores,
      };
    }
    default:
      return state
  }
}

export default topScoresReducer