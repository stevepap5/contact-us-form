import { combineReducers } from "redux";
import { ContactFormReducer } from "./ContactFormReducer";
import { ModalReducer } from "./ModalReducer";

const reducers = combineReducers({
  contactForms: ContactFormReducer,
  modal: ModalReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
