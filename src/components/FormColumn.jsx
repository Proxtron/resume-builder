import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import "../styles/FormColumn.css";

export default function FormColumn({generalInfoValues, onFormChange, educationValues, addEducation, editEducation, 
        deleteEducation, addExperience, editExperience, deleteExperience, experienceValues}) {
    return (
        <section className="form-column">
            <GeneralInformationForm generalInfoValues={generalInfoValues} onFormChange={onFormChange}/>
            <EducationForm educationValues={educationValues} addEducation={addEducation} 
                editEducation={editEducation} deleteEducation={deleteEducation}/>
            <ExperienceForm experienceValues={experienceValues} addExperience={addExperience}
                editExperience={editExperience} deleteExperience={deleteExperience}/>
        </section>
    );
}