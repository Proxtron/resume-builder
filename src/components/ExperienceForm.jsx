import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import jobIcon from "../../public/portfolio-suitcase-svgrepo-com.svg";
import FormManipulationIcons from "./FormManipulationIcons";

export default function ExperienceForm() {
    const [isOpened, setIsOpened] = useState(true);
    const [isEditable, setIsEditable] = useState(false);

    function handleOpen() {
        setIsOpened(!isOpened);
    }

    function handleEdit() {
        setIsEditable(!isEditable);
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
                        {isOpened ? "-" : "+"}
                </button>
            </div>
            
            {isOpened && (
                <>
                    <InputRow>
                        <InputField id="company-name" name="Company Name" placeholder="Type here..." isEditable={isEditable}/>
                        <InputField id="job-title" name="Job title" placeholder="Type here..." isEditable={isEditable}/>
                    </InputRow>
                    <InputField id="job-description" name="Job Description" type="textarea" placeholder="Type here..." isEditable={isEditable}/>
                    <InputRow>
                        <InputField id="job-start" name="Start Date" type="date" isEditable={isEditable}/>
                        <InputField id="job-end" name="End Date" type="date" isEditable={isEditable}/>
                    </InputRow>
                </>
            )}
            {isOpened && (<FormManipulationIcons isEditable={isEditable} clickHandler={handleEdit}/>)}
        </section>
    )
}