import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import "../styles/FormColumn.css";

export default function FormColumn({values, onFormChange, educationValues, addEducation, editEducation, deleteEducation}) {
    return (
        <section className="form-column">
            <GeneralInformationForm values={values} onFormChange={onFormChange}/>
            <EducationForm values={values} onFormChange={onFormChange} educationValues={educationValues} 
                addEducation={addEducation} editEducation={editEducation} deleteEducation={deleteEducation}/>
            <ExperienceForm values={values} onFormChange={onFormChange}/>
        </section>
    );
}