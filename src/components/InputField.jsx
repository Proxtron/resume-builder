import "../styles/InputField.css";

export default function InputField({id, name, type="text", placeholder}) {
    return (
        <div className="input-field">
            <label className="input-label" for={id}>{name}</label>
            {
                type === "textarea" 
                    ? (<textarea className="textarea" id={id} placeholder={placeholder}></textarea>)
                    : (<input className="input" id={id} type={type} placeholder={placeholder}/>)
            }
        </div>
    );
}