import { ActionTypesScoreBoard } from "../../constants/enums/actionTypesScoreBoard";

const addScore = (score) => {
  return {
    type: ActionTypesScoreBoard.ADD_SCORE,
    payload: score
  };
}

export { addScore }