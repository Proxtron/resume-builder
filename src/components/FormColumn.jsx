import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import "../styles/FormColumn.css";

export default function FormColumn({values, onFormChange}) {
    return (
        <section className="form-column">
            <GeneralInformationForm values={values} onFormChange={onFormChange}/>
            <EducationForm values={values} onFormChange={onFormChange}/>
            <ExperienceForm values={values} onFormChange={onFormChange}/>
        </section>
    );
}