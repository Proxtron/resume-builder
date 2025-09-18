import GeneralInformationForm from "./GeneralInformationForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

export default function FormColumn() {
    return (
        <section>
            <GeneralInformationForm/>
            <EducationForm/>
            <ExperienceForm/>
        </section>
    );
}