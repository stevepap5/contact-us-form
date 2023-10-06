import ActionType from "./actionType";

interface OpenModalSuccessAction {
  type: ActionType.OPEN_MODAL_SUCCESS;
  payload?: boolean;
}

interface OpenModalFailureAction {
  type: ActionType.OPEN_MODAL_FAILURE;
  payload?: boolean;
}

interface CloseModalAction {
  type: ActionType.CLOSE_MODAL;
  payload?: any;
}

export type ModalAction =
  | OpenModalSuccessAction
  | OpenModalFailureAction
  | CloseModalAction;
