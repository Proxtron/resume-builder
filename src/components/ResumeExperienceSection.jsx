import { validateDate } from "../utils";

export default function ResumeExperienceSection({companyName, jobTitle, startDate, endDate, jobDescription}) {
    startDate = validateDate(startDate, "MMM. y");
    endDate = validateDate(endDate, "MMM. y");
    return (
        <>
            <h3 className="resume-section-header">WORK EXPERIENCE</h3>
            <hr className="resume-hr"></hr>
            <p className="resume-text-sm left-align"><strong>{companyName}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{jobTitle}</p>
                <p className="resume-text-sm">{startDate} - {endDate}</p>
            </div>
            <p className="resume-text-sm left-align">{jobDescription}</p>
        </>
    );
}