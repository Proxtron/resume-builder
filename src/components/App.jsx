import "../styles/App.css";
import FormColumn from "./FormColumn";
import OutputColumn from "./OutputColumn";
import { useState } from "react";
import { v4 } from "uuid";
import { Analytics } from "@vercel/analytics/react";

const initialGeneralInfoValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};
const initialEducationValues = [];
const initialExperienceValues = [];

function App() {
  const [generalInfoValues, setGeneralInfoValues] = useState(
    initialGeneralInfoValues
  );
  const [educationValues, setEducationValues] = useState(
    initialEducationValues
  );
  const [experienceValues, setExperienceValues] = useState(
    initialExperienceValues
  );

  function onFormChange(key, value) {
    setGeneralInfoValues({
      ...generalInfoValues,
      [key]: value,
    });
  }

  function addEducation() {
    const newEducation = {
      id: v4(),
      school: "",
      degree: "",
      degreeStart: "",
      degreeEnd: "",
    };

    setEducationValues((prevEducationValue) => [
      ...prevEducationValue,
      newEducation,
    ]);
  }

  function editEducation(id, key, value) {
    setEducationValues((prevEducationValues) =>
      prevEducationValues.map((educationItem) => {
        if (id === educationItem.id) {
          return { ...educationItem, [key]: value };
        } else {
          return educationItem;
        }
      })
    );
  }

  function deleteEducation(id) {
    setEducationValues(
      educationValues.filter((educationItem) => {
        return educationItem.id !== id;
      })
    );
  }

  function addExperience() {
    const newExperience = {
      id: v4(),
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    };

    setExperienceValues([...experienceValues, newExperience]);
  }

  function editExperience(id, key, value) {
    setExperienceValues((prevExperienceValues) =>
      prevExperienceValues.map((experienceItem) => {
        if (id === experienceItem.id) {
          return { ...experienceItem, [key]: value };
        } else {
          return experienceItem;
        }
      })
    );
  }

  function deleteExperience(id) {
    setExperienceValues(
      experienceValues.filter((experienceItem) => {
        return experienceItem.id !== id;
      })
    );
  }

  return (
    <>
      <Analytics />
      <header className="website-header">
        <h1 className="website-title">ResumeForge</h1>
        <p>Create your resume. Download as PDF.</p>
      </header>
      <main className="app-container">
        <FormColumn
          generalInfoValues={generalInfoValues}
          educationValues={educationValues}
          experienceValues={experienceValues}
          onFormChange={onFormChange}
          addEducation={addEducation}
          editEducation={editEducation}
          deleteEducation={deleteEducation}
          addExperience={addExperience}
          editExperience={editExperience}
          deleteExperience={deleteExperience}
        />
        <OutputColumn
          generalInfoValues={generalInfoValues}
          educationValues={educationValues}
          experienceValues={experienceValues}
        />
      </main>
    </>
  );
}

export default App;
