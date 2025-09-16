import FormSection from "./FormSection"
import InputRow from "./InputRow"
import InputField from "./InputField"

export default function FormColumn() {
    return (
        <section>
            <FormSection title="General Information">
                <InputRow>
                    <InputField id="first-name" name="First Name"/>
                    <InputField id="last-name" name="Last Name"/>
                </InputRow>
                <InputRow>
                    <InputField id="email" name="Email" type="email"/>
                    <InputField id="phone-number" name="Phone Number" type="tel" />
                </InputRow>
            </FormSection>

            <FormSection title="Education">
                <InputRow>
                    <InputField id="school" name="School"/>
                    <InputField id="degree" name="Degree"/>
                </InputRow>
                <InputRow>
                    <InputField id="degree-start" name="Start Date" type="date"/>
                    <InputField id="degree-end" name="End" type="date"/>
                </InputRow>
            </FormSection>

            <FormSection title="Professional Experience">
                <InputRow>
                    <InputField id="company-name" name="Company Name"/>
                    <InputField id="job-title" name="Job title"/>
                </InputRow>
            </FormSection>
        </section>
    );
}