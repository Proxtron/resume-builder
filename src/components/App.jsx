import { useState } from 'react'
import '../styles/App.css'
import InputField from './InputField';
import InputRow from './InputRow';

function App() {
  return (
    <>
      <InputRow>
        <InputField id="first-name" name="First Name"/>
        <InputField id="last-name" name="Last Name"/>
      </InputRow>
      <InputRow>
        <InputField id="email" name="Email" type="email"/>
        <InputField id="phone-number" name="Phone Number" type="tel" />
      </InputRow>
      
    </>
  );
}

export default App
