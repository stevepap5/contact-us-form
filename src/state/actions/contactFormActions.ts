import contactFormMessage from "../../components/contactFormMessage";
import ActionType from "./actionType";

interface SendMessageAction {
  type: ActionType.SEND_MESSAGE;
}

interface SuccessMessageAction {
  type: ActionType.SUCCESS_MESSAGE;
  payload: contactFormMessage;
}

interface ErrorMessageAction {
  type: ActionType.ERROR_MESSAGE;
  payload: string;
}

type ContactFormAction =
  | SendMessageAction
  | SuccessMessageAction
  | ErrorMessageAction;

export default ContactFormAction;
