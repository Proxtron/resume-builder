import { validateDate } from "../utils.js";

export default function ResumeEducationSection({school, degree, degreeStart, degreeEnd}) {
    degreeStart = validateDate(degreeStart, "MMM. y");
    degreeEnd = validateDate(degreeEnd, "MMM. y");
    return (
        <>
            <h3 className="resume-section-header">EDUCATION</h3>
            <hr className="resume-hr"></hr>
            <p className="resume-text-sm left-align"><strong>{school}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{degree}</p>
                <p className="resume-text-sm">{degreeStart} - {degreeEnd}</p>
            </div>
        </>
    );
}