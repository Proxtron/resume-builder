import { useState } from "react";
import "../styles/FormSection.css";
import jobIcon from "../../public/portfolio-suitcase-svgrepo-com.svg";
import ExperienceFormItem from "./ExperienceFormItem";
import { Fragment } from "react";

export default function ExperienceForm({experienceValues, addExperience, editExperience, deleteExperience}) {
    const [isOpened, setIsOpened] = useState(true);

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
                    {experienceValues.map((experienceItem) => {
                        return (
                            <Fragment key={experienceItem.id}>
                                <ExperienceFormItem {...experienceItem} editExperience={editExperience}
                                    deleteExperience={deleteExperience}/>
                                <hr className="form-item-separator"></hr>
                            </Fragment>
                        )
                    })}
                    <button className="add-btn" 
                        aria-label="Add an Educational Experience"
                        onClick={addExperience}
                        >+
                    </button>
                </>
            )}
        </section>
    )
}