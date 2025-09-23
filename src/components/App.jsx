import '../styles/App.css'
import FormColumn from './FormColumn';
import OutputColumn from './OutputColumn';
import { useState } from 'react';
import { v4 } from 'uuid';

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

const initialEducationValues = [];

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [educationValues, setEducationValues] = useState(initialEducationValues);

  function onFormChange(key, value) {
    
    setFormValues({
        ...formValues,
        [key]: value
    })
  }

  function addEducation() {
    const newEducation = {
      id: v4(),
      degree: "",
      degreeStart: "",
      degreeEnd: ""
    };

    setEducationValues((prevEducationValue) => [...prevEducationValue, newEducation]);
  }

  function editEducation(id, key, value) {
    setEducationValues(prevEducationValues => 
      prevEducationValues.map(educationItem => {
        if(id === educationItem.id) {
          return {...educationItem, [key]: value}
        } else {
          return educationItem;
        }
      })
    )
  }

  function deleteEducation(id) {
    setEducationValues(
      educationValues.filter((educationItem) => {
        return educationItem.id !== id;
      })
    )
  }

  return (
    <div className="app-container">
      <FormColumn values={formValues} educationValues={educationValues} onFormChange={onFormChange}
        addEducation={addEducation} editEducation={editEducation} deleteEducation={deleteEducation}/>
      <OutputColumn values={formValues}/>
    </div>
  );
}

export default App;