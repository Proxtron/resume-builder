import "../styles/InputField.css";

export default function InputField({id, name, type="text", placeholder, isEditable}) {
    return (
        <div className="input-field">
            <label className="input-label" for={id}>{name}</label>
            {
                type === "textarea" 
                    ? (<textarea className="textarea" id={id} placeholder={placeholder} disabled={!isEditable}></textarea>)
                    : (<input className="input" id={id} type={type} placeholder={placeholder} disabled={!isEditable}/>)
            }
        </div>
    );
}