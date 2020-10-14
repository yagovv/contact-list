import React, { useState, useEffect } from 'react';
import API from '../../API';
import { useLocalStorageState } from '../../utils';
import Contact from '../Contact';
import NewContact from '../NewContact';

function ContactsList() {
  const [contacts, setContacts] = useLocalStorageState('contacts', []);
  const [isCreatingContact, setisCreatingContact] = useState(false);
  const [searchName, setSearchName] = useState('');

  const fetchContacts = async () => {
    const fetchedContacts = await API.getAll();
    setContacts(fetchedContacts.data);
  };

  useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddContact = () => {
    setisCreatingContact(true);
  };

  const handleSaveContact = async event => {
    event.preventDefault();

    const { email, firstName, lastName, phone } = event.target;
    const object = {
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value
    };

    setisCreatingContact(false);
    const { id } = await API.create(object);

    setContacts([...contacts, { id, ...object }]);
  };

  const handleDeleteContact = async contact => {
    await API.delete(contact._id);
    setContacts(contacts.filter(i => i !== contact));
  };

  const handleUpdateContact = async contact => {
    await API.update(contact);
    const contactsCopy = [...contacts];

    setContacts([
      ...contactsCopy.map(c => {
        if (c.id === contact.id) return contact;
        return c;
      })
    ]);
  };

  const handleCancel = event => {
    event.preventDefault();
    setisCreatingContact(false);
  };

  const handleChangeSearchName = event => {
    setSearchName(event.target.value);
  };

  return (
    <>
      <input
        onChange={handleChangeSearchName}
        value={searchName}
        placeholder="Search by name"
        className="formInput contact-name"
      />

      <ul className="contact-list">
        {contacts
          .filter(contact => {
            if (!searchName) return true;
            if (
              contact.firstName.includes(searchName) ||
              contact.lastName.includes(searchName)
            ) {
              return true;
            }
            return false;
          })
          .map(contact => (
            <Contact
              key={contact.email}
              contact={contact}
              onEdit={handleUpdateContact}
              onDelete={handleDeleteContact}
            />
          ))}
        {isCreatingContact && (
          <NewContact onSave={handleSaveContact} onCancel={handleCancel} />
        )}
      </ul>
      {isCreatingContact || (
        <button
          aria-label="add-contact-button"
          name="add-contact"
          className="addButton"
          onClick={handleAddContact}
        >
          +
        </button>
      )}
    </>
  );
}

export default ContactsList;
