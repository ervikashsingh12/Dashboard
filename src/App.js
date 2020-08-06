import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Headerfile} from './components/Headerfile'
import Table from './components/Table'
import Body from './components/BodyJsx'
import FormValidator from './components/FormValidator';

function App() {
  return (
    <div className="App">
        <Headerfile />
        <Table />
        <FormValidator />
        <Body name="Shubham" Lname="Sinha">
          <p>This code is written by vikash</p>
        </Body>
        <Body name="Deepanshu" Lname="Chauhan"></Body>
        <button>Action</button>
        <Body name="Suyash" Lname="Seth"></Body>
    </div>
  );
}

export default App;
