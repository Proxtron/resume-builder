import { validateDate } from "../utils.js";

export default function ResumeEducationSection({educationItem}) {
    let {school, degree, degreeStart, degreeEnd} = educationItem
    degreeStart = validateDate(degreeStart, "MMM. y");
    degreeEnd = validateDate(degreeEnd, "MMM. y");
    return (
        <>
            <p className="resume-text-sm left-align"><strong>{school}</strong></p>
            <div className="resume-row">
                <p className="resume-text-sm">{degree}</p>
                <p className="resume-text-sm">{degreeStart} - {degreeEnd}</p>
            </div>
        </>
    );
}