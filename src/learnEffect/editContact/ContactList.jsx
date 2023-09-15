import { useState } from "react";
import EditContact from "./EditContact";
import { ContactName } from "./ContactStyled";

// https://react.dev/learn/you-might-not-need-an-effect Challenge 3
// https://codesandbox.io/s/kr545y?file=%2FEditContact.js&utm_medium=sandpack
export default function ContactList() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  const updateContact = (contact) => {
    const pos = contacts.findIndex((c) => c.id === contact.id);

    setContacts([
      ...contacts.slice(0, pos),
      contact,
      ...contacts.slice(pos + 1),
    ]);
  };

  return (
    <>
      <h3>
        Notice two ways of using key attribute to to tell React that EditContact
        form is conceptually a different contact’s form and should not preserve
        state.
      </h3>
      <p>1. use key attribute directly on EditContact component </p>
      <p>2. use another layer of child component, the Form</p>
      {contacts.map((contact) => (
        <ContactName key={contact.id} onClick={() => setSelectedId(contact.id)}>
          {contact.name}
        </ContactName>
      ))}
      <EditContact
        contact={selectedContact}
        onChange={updateContact}
        key={selectedContact.id}
      />
    </>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
