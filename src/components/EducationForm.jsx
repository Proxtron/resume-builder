import { useState } from "react";
import "../styles/FormSection.css";
import personIcon from "../../public/person-svgrepo-com.svg";
import EducationFormItem from "./EducationFormItem";

export default function EducationForm({educationValues, addEducation, editEducation, deleteEducation}) {
    const [isOpened, setIsOpened] = useState(true);

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
                    {educationValues.map((educationItem) => {
                        return (
                            <>
                                <EducationFormItem key={educationItem.id} {...educationItem} editEducation={editEducation}
                                    deleteEducation={deleteEducation}/>
                                <hr className="form-item-separator"></hr>
                            </>
                        )
                    })}
                    <button className="add-btn" 
                        aria-label="Add an Educational Experience"
                        onClick={addEducation}
                        >+
                    </button>
                </>
            )}
        </section>
    )
}