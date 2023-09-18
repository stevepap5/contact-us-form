interface AlertProps {
  message: string;
  openAlert: boolean;
  closeAlert: (event: any) => void;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  openAlert,
  closeAlert,
}) => {
  return (
    <dialog open={openAlert}>
      <form>
        <label>{message}</label>
        <button onClick={closeAlert}>Close</button>
      </form>
    </dialog>
  );
};
