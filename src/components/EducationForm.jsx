import { useState } from "react";
import "../styles/FormSection.css";
import educationIcon from "../../public/education-cap-svgrepo-com.svg";
import EducationFormItem from "./EducationFormItem";
import { Fragment } from "react";

export default function EducationForm({educationValues, addEducation, editEducation, deleteEducation}) {
    const [isOpened, setIsOpened] = useState(true);

    function handleOpen() {
        setIsOpened(!isOpened);
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
                        {isOpened ? "_" : "+"}
                </button>
            </div>
            
            {isOpened && (
                <>
                    {educationValues.map((educationItem) => {
                        return (
                            <Fragment key={educationItem.id}>
                                <EducationFormItem key={educationItem.id} {...educationItem} editEducation={editEducation}
                                    deleteEducation={deleteEducation}/>
                                <hr className="form-item-separator"></hr>
                            </Fragment>
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