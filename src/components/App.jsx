import '../styles/App.css'
import FormColumn from './FormColumn';
import OutputColumn from './OutputColumn';
import { useState } from 'react';

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  school: "",
  degree: "",
  degreeStart: "",
  degreeEnd: "",
  companyName: "",
  jobTitle: "",
  jobDescription: "",
  startDate: "",
  endDate: ""
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  function onFormChange(key, value) {
    
    setFormValues({
        ...formValues,
        [key]: value
    })
  }
  return (
    <div class="app-container">
      <FormColumn values={formValues} onFormChange={onFormChange}/>
      <OutputColumn values={formValues}/>
    </div>
  );
}

export default App;
