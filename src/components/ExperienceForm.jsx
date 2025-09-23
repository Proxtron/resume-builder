import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import jobIcon from "../../public/portfolio-suitcase-svgrepo-com.svg";

export default function ExperienceForm({values, onFormChange}) {
    const [isOpened, setIsOpened] = useState(true);

    const {companyName, jobTitle, jobDescription, startDate, endDate} = values;
    
    function handleOpen() {
        setIsOpened(!isOpened);
    }

    return (
        <section className="form-section">
            <div className={`form-section-header ${isOpened ? "" : "form-section-header-closed"}`}>
                <img className="icon-style" src={jobIcon}/>
                <h2 className="title">Professional Experience</h2>
                <button 
                    className="open-close-btn" 
                    aria-label={isOpened ? "Close section": "Open section"} 
                    onClick={handleOpen}>
                        {isOpened ? "_" : "+"}
                </button>
            </div>
            
            {isOpened && (
                <>
                    <InputRow>
                        <InputField id="company-name" name="Company Name" placeholder="Type here..." 
                        value={companyName} onChange={(e) => onFormChange("companyName", e.target.value)}/>
                        <InputField id="job-title" name="Job title" placeholder="Type here..." 
                        value={jobTitle} onChange={(e) => onFormChange("jobTitle", e.target.value)}/>
                    </InputRow>
                    <InputField id="job-description" name="Job Description" type="textarea" placeholder="Type here..." 
                    value={jobDescription} onChange={(e) => onFormChange("jobDescription", e.target.value)}/>
                    <InputRow>
                        <InputField id="job-start" name="Start Date" type="month" 
                        value={startDate} onChange={(e) => onFormChange("startDate", e.target.value)}/>
                        <InputField id="job-end" name="End Date" type="month" 
                        value={endDate} onChange={(e) => onFormChange("endDate", e.target.value)}/>
                    </InputRow>
                </>
            )}
        </section>
    )
}