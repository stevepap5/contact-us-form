import { combineReducers } from "redux";
import { ContactFormReducer } from "./ContactFormReducer";

const reducers = combineReducers({ contactForms: ContactFormReducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
