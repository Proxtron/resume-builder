import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import educationIcon from "../../public/education-cap-svgrepo-com.svg";
import FormManipulationIcons from "./FormManipulationIcons";

export default function GeneralInformationForm() {
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
                <img className="icon-style" src={educationIcon}/>
                <h2 className="title">Education</h2>
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
                        <InputField id="first-name" name="First Name" placeholder="Type here..." isEditable={isEditable}/>
                        <InputField id="last-name" name="Last Name" placeholder="Type here..." isEditable={isEditable}/>
                    </InputRow>
                    <InputRow>
                        <InputField id="email" name="Email" type="email" placeholder="hello@example.com" isEditable={isEditable}/>
                        <InputField id="phone-number" name="Phone Number" type="tel" placeholder="(XXX) XXX-XXXX" isEditable={isEditable}/>
                    </InputRow>
                </>
            )}
            {isOpened && (<FormManipulationIcons isEditable={isEditable} clickHandler={handleEdit}/>)}
        </section>
    )
}