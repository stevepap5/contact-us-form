import contactFormMessage from "../../components/contactFormMessage";
import ActionType from "../actions/actionType";
import Action from "../actions/actions";

const initialForm: contactFormMessage = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

export const ContactFormReducer = (
  contactForm: contactFormMessage = initialForm,
  action: Action
): contactFormMessage => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      return contactForm;
    case ActionType.SUCCESS_MESSAGE:
      return contactForm;
    case ActionType.ERROR_MESSAGE:
      return contactForm;
    default:
      return contactForm;
  }
};
