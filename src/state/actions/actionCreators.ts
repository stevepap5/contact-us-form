import { Dispatch } from "redux";
import ActionType from "./actionType";
import ContactFormAction from "./contactFormActions";
import { ModalAction } from "./modalActions";

export const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
  return async (dispatch: Dispatch<ContactFormAction | ModalAction>) => {
    dispatch({ type: ActionType.SEND_MESSAGE });

    try {
      const contactFormMessage = new FormData(event.currentTarget);

      contactFormMessage.append(
        "access_key",
        "8854c25f-cba9-4830-85c8-74717fe080c4"
      );

      const object = Object.fromEntries(contactFormMessage);
      const json = JSON.stringify(object);

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      dispatch({
        type: ActionType.OPEN_MODAL_SUCCESS,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: ActionType.ERROR_MESSAGE,
        payload: (error as Error).message,
      });

      dispatch({
        type: ActionType.CLOSE_MODAL,
        payload: true,
      });
    }
  };
};
