import ActionType from "../actions/actionType";
import { ModalAction } from "../actions/modalActions";

interface ModalState {
  isOpen?: boolean;
  description?: string;
}

const initialState: ModalState = {
  isOpen: false,
};

export const ModalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case ActionType.OPEN_MODAL_SUCCESS: {
      return {
        ...state,
        isOpen: true,
        description: "Your message was sent successful!",
      };
    }
    case ActionType.OPEN_MODAL_FAILURE: {
      return {
        ...state,
        isOpen: true,
        description: "Error your message was not sent!",
      };
    }
    case ActionType.CLOSE_MODAL: {
      return { ...state, isOpen: false };
    }
    default:
      return initialState;
  }
};
