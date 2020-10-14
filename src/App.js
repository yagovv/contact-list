import React from 'react';
import ContactsList from './Components/ContactsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">Contacts List</div>
      <ContactsList />
    </div>
  );
}

export default App;
