import { useActions } from "../state/hooks/useActions";
import { useTypedSelector } from "../state/hooks/useTypedSelector";
import "../App.css";
import React, { useState } from "react";
import contactFormMessage from "./contactFormMessage";
import { Alert } from "./Alert";

export const ContactForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const formMessage: contactFormMessage = useTypedSelector(
    (state) => state.contactForms
  );

  const { sendMessage } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage(event);
    setOpenDialog(true);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <p>
        <h2>
          <label className="headline">Send me a message</label>
        </h2>
      </p>
      <p>
        <label className="lbl">
          Feel free to get in touch with me with anything related to CODINGSPACE
          or you can just say hi. I will get back to you as soon as I can.
        </label>
      </p>
      <input
        className="test"
        value={formMessage.name}
        required
        placeholder="Test"
      />
      <input
        className="email"
        value={formMessage.email}
        required
        placeholder="Email address"
      />
      <input
        className="subject"
        value={formMessage.subject}
        required
        placeholder="Subject"
      />
      <p>
        <textarea
          className="textarea"
          required
          placeholder="Message"
        ></textarea>
      </p>
      <button className="btn">Send</button>
      <Alert
        message={""}
        openAlert={openDialog}
        closeAlert={(event) => {
          event?.preventDefault();
          setOpenDialog(false);
        }}
      ></Alert>
    </form>
  );
};
