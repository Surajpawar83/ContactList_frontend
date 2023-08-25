import React, { useState } from "react";

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);

  console.log(image);

  const addContact = async () => {
    if (!name || !number || !email || number.length > 10) {
      setError(true);
      return false;
    }
    let result = await fetch("http://localhost:5000/add-contact", {
      method: "post",
      body: JSON.stringify({ name, number, email, image }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setName("");
    setNumber("");
    setEmail("");
    setImage("");
  };

  return (
    <div className="contactForm">
      <h1>ADD CONTACT</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      {error && !name && (
        <span className="invalid-input">Enter valid Name</span>
      )}
      <input
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      {error && !number && (
        <span className="invalid-input">Enter valid Number</span>
      )}
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      {error && !email && (
        <span className="invalid-input">Enter valid Email</span>
      )}
      <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
