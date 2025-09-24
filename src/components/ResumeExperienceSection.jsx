import { validateDate } from "../utils";

export default function ResumeExperienceSection({experienceItem}) {
    let {companyName, jobTitle, startDate, endDate, jobDescription} = experienceItem;
    startDate = validateDate(startDate, "MMM. y");
    endDate = validateDate(endDate, "MMM. y");
    return (
        <>
            <p className="resume-text-sm left-align"><strong>{companyName}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{jobTitle}</p>
                <p className="resume-text-sm">{startDate} - {endDate}</p>
            </div>
            <p className="resume-text-sm left-align">{jobDescription}</p>
        </>
    );
}