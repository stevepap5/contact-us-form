import { Dispatch } from "redux";
import ActionType from "./actionType";
import Action from "./actions";

export const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
  return async (dispatch: Dispatch<Action>) => {
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
    } catch (error) {
      dispatch({
        type: ActionType.ERROR_MESSAGE,
        payload: (error as Error).message,
      });
    }
  };
};
