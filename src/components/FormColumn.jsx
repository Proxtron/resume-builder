import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";

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

export default function FormColumn() {
    const [formValues, setFormValues] = useState(initialFormValues);

    function onFormChange(key, value) {
        setFormValues({
            ...formValues,
            [key]: value
        })
    }

    return (
        <section>
            <GeneralInformationForm values={formValues} onFormChange={onFormChange}/>
            <EducationForm values={formValues} onFormChange={onFormChange}/>
            <ExperienceForm values={formValues} onFormChange={onFormChange}/>
        </section>
    );
}