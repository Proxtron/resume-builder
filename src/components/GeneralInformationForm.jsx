import { useState } from "react";
import "../styles/FormSection.css";
import InputRow from "./InputRow";
import InputField from "./InputField";
import personIcon from "../../public/person-svgrepo-com.svg";

export default function GeneralInformationForm({generalInfoValues, onFormChange}) {
    const [isOpened, setIsOpened] = useState(true);

    const {first, last, email, phone} = generalInfoValues;

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
                        <InputField id="first-name" name="First Name" placeholder="Type here..." 
                        value={first} onChange={(e) => onFormChange("firstName", e.target.value)}/>

                        <InputField id="last-name" name="Last Name" placeholder="Type here..." 
                        value={last} onChange={(e) => onFormChange("lastName", e.target.value)}/>
                    </InputRow>
                    <InputRow>
                        <InputField id="email" name="Email" type="email" placeholder="hello@example.com" 
                        value={email} onChange={(e) => onFormChange("email", e.target.value)}/>
                        
                        <InputField id="phone-number" name="Phone Number" type="tel" placeholder="(XXX) XXX-XXXX" 
                        value={phone} onChange={(e) => onFormChange("phoneNumber", e.target.value)}/>
                    </InputRow>
                </>
            )}
        </section>
    )
}