import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Contact({ contact, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const { firstName, lastName, phone, email } = contact;

  const handlePressEdit = () => {
    setIsEditing(true);
  };

  const handlePressSave = event => {
    event.preventDefault();
    const { email, firstName, lastName, phone } = event.target;
    setIsEditing(false);

    onEdit({
      id: contact._id,
      firstName: firstName.value,
      lastName: lastName.value,
      phone: phone.value,
      email: email.value
    });
  };

  return (
    <li>
      <form onSubmit={handlePressSave} className="contact">
        <div style={{ marginLeft: '20px' }}>
          <div className="contact-name-phone-container">
            <input
              name="firstName"
              className="formInput contact-name"
              disabled={!isEditing}
              defaultValue={firstName}
              required
            />

            <input
              name="lastName"
              className="formInput contact-name"
              disabled={!isEditing}
              defaultValue={lastName}
              required
            />

            <input
              name="phone"
              className="formInput contact-phone"
              disabled={!isEditing}
              defaultValue={phone}
              required
            />
          </div>
          <input
            name="email"
            className="formInput contact-email"
            disabled={!isEditing}
            defaultValue={email}
            required
          />
        </div>
        <div className="contact-buttons">
          {!isEditing ? (
            <>
              <input
                className="auxiliar-button"
                type="button"
                onClick={handlePressEdit}
                value="Edit"
              ></input>
              <input
                type="button"
                className="auxiliar-button"
                onClick={() => onDelete(contact)}
                value="Delete"
              ></input>
            </>
          ) : (
            <button type="submit" className="auxiliar-button">
              <span role="img" aria-label="save">
                💾
              </span>
            </button>
          )}
        </div>
      </form>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Contact;
