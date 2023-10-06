import { useDispatch } from "react-redux";
import ActionType from "../state/actions/actionType";

interface ModalProps {
  children?: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: ActionType.CLOSE_MODAL,
      payload: false,
    });
  };
  return (
    <form className="modal">
      {children}
      <button className="close" onClick={closeModal}>
        x
      </button>
    </form>
  );
};
