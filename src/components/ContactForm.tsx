import { useActions } from "../state/hooks/useActions";
import { useTypedSelector } from "../state/hooks/useTypedSelector";
import "../App.css";
import React from "react";
import contactFormMessage from "./contactFormMessage";
import { Modal } from "./Modal";

export const ContactForm = () => {
  const formMessage: contactFormMessage = useTypedSelector(
    (state) => state.contactForms
  );

  const { isOpen } = useTypedSelector((state) => state.modal);
  const { description } = useTypedSelector((state) => state.modal);
  console.log("isOpen", isOpen);
  console.log("description", description);

  const { sendMessage } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(event);
  };

  return (
    <div>
      <form id="form" onSubmit={onSubmit}>
        <p>
          <h2>
            <label className="headline">Send me a message</label>
          </h2>
        </p>
        <p>
          <label className="lbl">
            Feel free to get in touch with me with anything related to
            CODINGSPACE or you can just say hi. I will get back to you as soon
            as I can.
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
      </form>
      {isOpen && <Modal>{description}</Modal>}
    </div>
  );
};
