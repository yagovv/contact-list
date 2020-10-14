// mocking HTTP requests
// http://localhost:3000/login-submission

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ContactsList from '../Components/ContactsList';

test(`showing the main page`, () => {
  render(<App />);
  expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
});

test(`click on add button renders newContact component`, () => {
  render(<ContactsList />);
  screen.getByLabelText('add-contact-button').click();
  expect(screen.getByLabelText('new-contact-form')).toBeInTheDocument();
});

test(`user can fill newContact form`, () => {
  render(<ContactsList />);
  screen.getByLabelText('add-contact-button').click();
  const firstNameInput = screen.getByLabelText('firstName');
  const lastNameInput = screen.getByLabelText('lastName');
  const emailInput = screen.getByLabelText('email');
  const phoneInput = screen.getByLabelText('phone');

  const firstName = 'George';
  const lastName = 'Wallace';
  const email = 'georgew@gmail.com';
  const phone = '690248202';
  userEvent.type(firstNameInput, firstName);
  userEvent.type(lastNameInput, lastName);
  userEvent.type(emailInput, email);
  userEvent.type(phoneInput, phone);

  expect(firstNameInput.value).toBe(firstName);
  expect(lastNameInput.value).toBe(lastName);
  expect(emailInput.value).toBe(email);
  expect(phoneInput.value).toBe(phone);
});
