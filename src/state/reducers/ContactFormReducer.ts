import contactFormMessage from "../../components/contactFormMessage";
import ActionType from "../actions/actionType";
import ContactFormAction from "../actions/contactFormActions";

const initialForm: contactFormMessage = {
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
};

export const ContactFormReducer = (
  contactForm: contactFormMessage,
  action: ContactFormAction
): contactFormMessage => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      return contactForm;
    case ActionType.SUCCESS_MESSAGE:
      return contactForm;
    case ActionType.ERROR_MESSAGE:
      return contactForm;
    default:
      return initialForm;
  }
};
