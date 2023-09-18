import ActionType from "./actionType";

interface SendMessageAction {
  type: ActionType.SEND_MESSAGE;
}

interface SuccessMessageAction {
  type: ActionType.SUCCESS_MESSAGE;
  payload: string;
}

interface ErrorMessageAction {
  type: ActionType.ERROR_MESSAGE;
  payload: string;
}

type Action = SendMessageAction | SuccessMessageAction | ErrorMessageAction;

export default Action;
