import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import personIcon from "../../public/person-svgrepo-com.svg";
import FormManipulationIcons from "./FormManipulationIcons";

export default function EducationForm() {
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
                <img className="icon-style" src={personIcon}/>
                <h2 className="title">General Information</h2>
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
                        <InputField id="school" name="School" placeholder="Type here..." isEditable={isEditable}/>
                        <InputField id="degree" name="Degree" placeholder="Type here..." isEditable={isEditable}/>
                    </InputRow>
                    <InputRow>
                        <InputField id="degree-start" name="Start Date" type="date" isEditable={isEditable}/>
                        <InputField id="degree-end" name="End Date" type="date" isEditable={isEditable}/>
                    </InputRow>
                </>
            )}
            {isOpened && (<FormManipulationIcons isEditable={isEditable} clickHandler={handleEdit}/>)}
        </section>
    )
}