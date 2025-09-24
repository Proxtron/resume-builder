import InputRow from "./InputRow";
import InputField from "./InputField";

export default function ExperienceFormItem({id, companyName, jobTitle, jobDescription, startDate, endDate, 
    editExperience, deleteExperience}) {
return (
    <div>
        <InputRow>
            <InputField id="company-name" name="Company Name" placeholder="Type here..." 
            value={companyName} onChange={(e) => editExperience(id, "companyName", e.target.value)}/>
            <InputField id="job-title" name="Job title" placeholder="Type here..." 
            value={jobTitle} onChange={(e) => editExperience(id, "jobTitle", e.target.value)}/>
        </InputRow>
        <InputField id="job-description" name="Job Description" type="textarea" placeholder="Type here..." 
        value={jobDescription} onChange={(e) => editExperience(id, "jobDescription", e.target.value)}/>
        <InputRow>
            <InputField id="job-start" name="Start Date" type="month" 
            value={startDate} onChange={(e) => editExperience(id, "startDate", e.target.value)}/>
            <InputField id="job-end" name="End Date" type="month" 
            value={endDate} onChange={(e) => editExperience(id, "endDate", e.target.value)}/>
        </InputRow>
        <button className="add-btn float-right" 
            aria-label="Delete Professional Experience"
            onClick={() => deleteExperience(id)}
            >X
        </button>
    </div>
)
}