import React from 'react';
import PropTypes from 'prop-types';

function NewContact({ onSave, onCancel }) {
  return (
    <li>
      <form onSubmit={onSave} className="contact" aria-label="new-contact-form">
        <div className="contact-name-phone-container">
          <input
            placeholder="First Name"
            name="firstName"
            className="contact-name formInput"
            aria-label="firstName"
          />
          <input
            placeholder="Last Name"
            name="lastName"
            className="contact-name formInput"
            aria-label="lastName"
          />
          <input
            placeholder="Phone"
            name="phone"
            className="contact-phone formInput"
            aria-label="phone"
          />
        </div>
        <input
          placeholder="email@email.com"
          name="email"
          className="contact-email formInput"
          aria-label="email"
        />
        <div className="contact-buttons">
          <button className="auxiliar-button" type="submit" aria-label="save-button">
            Save
          </button>
          <input
            className="auxiliar-button"
            type="button"
            onClick={onCancel}
            value="Cancel"
            aria-label="cancel-button"
          />
        </div>
      </form>
    </li>
  );
}

NewContact.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default NewContact;
