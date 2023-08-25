import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

const ContactList = () => {
  const [allContacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    let result = await fetch("http://localhost:5000/all-contacts");
    result = await result.json();
    setContacts(result);
  };

  const deleteContact = async (id) => {
    let result = await fetch("http://localhost:5000/contact/" + id, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getContacts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch("http://localhost:5000/search/" + key);
      result = await result.json();
      if (result) {
        setContacts(result);
      }
    } else {
      getContacts();
    }
  };

  return (
    <div className="contactlist">
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="search contact using name or number"
        onChange={searchHandle}
      />
      <div className="contact-cards-container">
        {allContacts.length > 0 ? (
          allContacts.map((item, index) => (
            <div className="contact-card" key={item._id}>
              <h2>{item.name}</h2>
              <p>Number: {item.number}</p>
              <p>Email: {item.email}</p>
              <div>
                <button onClick={() => deleteContact(item._id)}>Delete</button>
                <Link to={"/update/" + item._id}>Update</Link>
              </div>
            </div>
          ))
        ) : (
          <h1>NO CONTACT FOUND</h1>
        )}
      </div>
    </div>
  );
};

export default ContactList;
