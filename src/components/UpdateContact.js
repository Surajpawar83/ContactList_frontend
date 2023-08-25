import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getContactDetails();
  }, []);

  const getContactDetails = async () => {
    console.log(params);
    let result = await fetch("http://localhost:5000/contact/" + params.id);
    result = await result.json();
    setName(result.name);
    setNumber(result.number);
    setEmail(result.email);
  };

  const updateContact = async () => {
    //console.log(name, number, email);
    let result = await fetch("http://localhost:5000/contact/" + params.id, {
      method: "Put",
      body: JSON.stringify({ name, number, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

    navigate("/");
  };

  return (
    <div className="contactForm">
      <h1>UPDATE CONTACT</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button onClick={updateContact}>update Contact</button>
    </div>
  );
};

export default UpdateContact;
