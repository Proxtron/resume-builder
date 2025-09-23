import "../styles/ResumePage.css";
import ResumeEducationSection from "./ResumeEducationSection";
import ResumeExperienceSection from "./ResumeExperienceSection";

export default function ResumePage({values}) {
    let { firstName, lastName, email, phoneNumber, school, degree, degreeStart,
        degreeEnd, companyName, jobTitle, jobDescription, startDate, endDate } = values;

    return (
        <div className="resume-page">
            <h2 className="name-heading">{firstName} {lastName}</h2>
            <p className="resume-text-sm">{email} {(email && phoneNumber) && "|"} {phoneNumber}</p>

            <ResumeEducationSection school={school} degree={degree} degreeStart={degreeStart} degreeEnd={degreeEnd}/>
            <ResumeExperienceSection companyName={companyName} jobTitle={jobTitle} jobDescription={jobDescription} 
                startDate={startDate} endDate={endDate}/>
        </div>
    );
}