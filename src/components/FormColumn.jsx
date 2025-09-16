import FormSection from "./FormSection"
import InputRow from "./InputRow"
import InputField from "./InputField"
import personIcon from "../../public/person-svgrepo-com.svg";
import educationIcon from "../../public/education-cap-svgrepo-com.svg";
import jobIcon from "../../public/portfolio-suitcase-svgrepo-com.svg";

export default function FormColumn() {
    return (
        <section>
            <FormSection title="General Information" icon={personIcon}>
                <InputRow>
                    <InputField id="first-name" name="First Name" placeholder="Type here..."/>
                    <InputField id="last-name" name="Last Name" placeholder="Type here..."/>
                </InputRow>
                <InputRow>
                    <InputField id="email" name="Email" type="email" placeholder="hello@example.com"/>
                    <InputField id="phone-number" name="Phone Number" type="tel" placeholder="(XXX) XXX-XXXX" />
                </InputRow>
            </FormSection>

            <FormSection title="Education" icon={educationIcon}>
                <InputRow>
                    <InputField id="school" name="School" placeholder="Type here..."/>
                    <InputField id="degree" name="Degree" placeholder="Type here..."/>
                </InputRow>
                <InputRow>
                    <InputField id="degree-start" name="Start Date" type="date"/>
                    <InputField id="degree-end" name="End Date" type="date"/>
                </InputRow>
            </FormSection>

            <FormSection title="Professional Experience" icon={jobIcon}>
                <InputRow>
                    <InputField id="company-name" name="Company Name" placeholder="Type here..."/>
                    <InputField id="job-title" name="Job title" placeholder="Type here..."/>
                </InputRow>
                <InputField id="job-description" name="Job Description" type="textarea" placeholder="Type here..."/>
                <InputRow>
                    <InputField id="job-start" name="Start Date" type="date"/>
                    <InputField id="job-end" name="End Date" type="date"/>
                </InputRow>
            </FormSection>
        </section>
    );
}