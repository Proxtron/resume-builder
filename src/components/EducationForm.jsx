import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import personIcon from "../../public/person-svgrepo-com.svg";

export default function EducationForm({values, onFormChange}) {
    const [isOpened, setIsOpened] = useState(true);

    const {school, degree, degreeStart, degreeEnd} = values;

    function handleOpen() {
        setIsOpened(!isOpened);
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
                        {isOpened ? "_" : "+"}
                </button>
            </div>
            
            {isOpened && (
                <>
                    <InputRow>
                        <InputField id="school" name="School" placeholder="Type here..." 
                        value={school} onChange={(e) => onFormChange("school", e.target.value)}/>
                        <InputField id="degree" name="Degree" placeholder="Type here..." 
                        value={degree} onChange={(e) => onFormChange("degree", e.target.value)}/>
                    </InputRow>
                    <InputRow>
                        <InputField id="degree-start" name="Start Date" type="date" 
                        value={degreeStart} onChange={(e) => onFormChange("degreeStart", e.target.value)}/>
                        <InputField id="degree-end" name="End Date" type="date" 
                        value={degreeEnd} onChange={(e) => onFormChange("degreeEnd", e.target.value)}/>
                    </InputRow>
                </>
            )}
        </section>
    )
}