import "../styles/ResumePage.css";
import ResumeEducationSection from "./ResumeEducationSection";
import ResumeExperienceSection from "./ResumeExperienceSection";

export default function ResumePage(props) {
    const {generalInfoValues, educationValues, experienceValues} = props
    // let { firstName, lastName, email, phoneNumber, school, degree, degreeStart,
    //     degreeEnd, companyName, jobTitle, jobDescription, startDate, endDate } = values;

    const {firstName, lastName, email, phoneNumber} = generalInfoValues;
    return (
        <div className="resume-page">
            <h2 className="name-heading">{firstName} {lastName}</h2>
            <p className="resume-text-sm">{email} {(email && phoneNumber) && "|"} {phoneNumber}</p>

            {educationValues.length > 0 && (
                <>
                <h3 className="resume-section-header">EDUCATION</h3>
                <hr className="resume-hr"></hr>
                </>
            )}
            {
                educationValues.map(educationItem => {
                    return (
                        <ResumeEducationSection key={educationItem.id} educationItem={educationItem}/>
                    );
                })
            }
            
            {experienceValues.length > 0 && (
                <>
                <h3 className="resume-section-header">WORK EXPERIENCE</h3>
                <hr className="resume-hr"></hr>
                </>
            )}
            {
                experienceValues.map(experienceItem => {
                    return (
                        <ResumeExperienceSection key={experienceItem.id} experienceItem={experienceItem}/>
                    );
                })
            }
        </div>
    );
}