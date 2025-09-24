import InputRow from "./InputRow";
import InputField from "./InputField";

export default function EducationFormItem({id, school, degree, degreeStart, degreeEnd, editEducation, deleteEducation}) {
    return (
        <div>
            <InputRow>
                <InputField id="school" name="School" placeholder="Type here..." 
                value={school} onChange={(e) => editEducation(id, "school", e.target.value)}/>
                <InputField id="degree" name="Degree" placeholder="Type here..." 
                value={degree} onChange={(e) => editEducation(id, "degree", e.target.value)}/>
            </InputRow>
            <InputRow>
                <InputField id="degree-start" name="Start Date" type="month" 
                value={degreeStart} onChange={(e) => editEducation(id, "degreeStart", e.target.value)}/>
                <InputField id="degree-end" name="End Date" type="month" 
                value={degreeEnd} onChange={(e) => editEducation(id, "degreeEnd", e.target.value)}/>
            </InputRow>
            <button className="add-btn float-right" 
                aria-label="Delete Educational Experience"
                onClick={() => deleteEducation(id)}
                >X
            </button>
        </div>
    )
}