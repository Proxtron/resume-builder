import "../styles/ResumePage.css";
import { format, isValid, parseISO } from "date-fns";

export default function ResumePage({values}) {
    let { firstName, lastName, email, phoneNumber, school, degree, degreeStart,
        degreeEnd, companyName, jobTitle, jobDescription, startDate, endDate } = values;

    degreeStart = validateDate(degreeStart, "MMM. y");
    degreeEnd = validateDate(degreeEnd, "MMM. y");
    startDate = validateDate(startDate, "MMM. y");
    endDate = validateDate(endDate, "MMM. y");

    return (
        <div className="resume-page">
            <h2 className="name-heading">{firstName} {lastName}</h2>
            <p className="resume-text-sm">{email} {(email && phoneNumber) && "|"} {phoneNumber}</p>

            <h3 className="resume-section-header">EDUCATION</h3>
            <hr className="resume-hr"></hr>
            <p className="resume-text-sm left-align"><strong>{school}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{degree}</p>
                <p className="resume-text-sm">{degreeStart} - {degreeEnd}</p>
            </div>

            <h3 className="resume-section-header">WORK EXPERIENCE</h3>
            <hr className="resume-hr"></hr>
            <p className="resume-text-sm left-align"><strong>{companyName}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{jobTitle}</p>
                <p className="resume-text-sm">{startDate} - {endDate}</p>
            </div>
            <p className="resume-text-sm left-align">{jobDescription}</p>
        </div>
    );
}

function validateDate(date, formatStr) {
    date = parseISO(date);
    date = isValid(date) ? format(date, formatStr) : "";
    return date;
}