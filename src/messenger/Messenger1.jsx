import { useState } from "react";
import { ContactListUL, ChatTextArea, ChatSection } from "./Messenger1Styled";

// https://codesandbox.io/s/rj9zny?file=/App.js&utm_medium=sandpack
// https://react.dev/learn/managing-state
export default function Messenger1() {
  const [activeContact, setActiveContact] = useState(contacts[0]);

  function handleClick(contact) {
    setActiveContact(contact);
  }

  return (
    <>
      <h4>
        React lets you override the default behavior, and force a component to
        reset its state by passing it a different key.
      </h4>
      <p>
        Type something for one user, then switch to another, stuff in chat box
        should be gone.
      </p>
      <ContactList contacts={contacts} onClick={handleClick} />
      <Chat contact={activeContact} key={activeContact.email} />
    </>
  );
}

function ContactList({ contacts, onClick }) {
  return (
    <ContactListUL>
      {contacts.map((contact) => (
        <li key={contact.email}>
          <button onClick={() => onClick(contact)}>{contact.name}</button>
        </li>
      ))}
    </ContactListUL>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");

  return (
    <ChatSection>
      <ChatTextArea
        placeholder={`Chat to ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button>Send to {contact.email} </button>
    </ChatSection>
  );
}

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];
