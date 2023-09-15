import { useState } from "react";

export default function EditContact({ contact, onChange }) {
  console.log(`contact = `);
  console.log(contact);

  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  return (
    <>
      <div>
        Name: <input value={name} onChange={(e) => setName(e.target.value)} />{" "}
      </div>
      <div>
        Email:{" "}
        <input value={email} onChange={(e) => setEmail(e.target.value)} />{" "}
      </div>
      <button onClick={() => onChange({ id: contact.id, name, email })}>
        Save
      </button>
      <button
        onClick={() => {
          setName(contact.name);
          setEmail(contact.email);
        }}
      >
        Reset
      </button>
    </>
  );
}
