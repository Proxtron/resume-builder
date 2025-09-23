import "../styles/InputField.css";

export default function InputField({id, name, type="text", placeholder, value, onChange}) {
    return (
        <div className="input-field">
            <label className="input-label" htmlFor={id}>{name}</label>
            {
                type === "textarea" 
                    ? (<textarea className="textarea" 
                        id={id} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange}>
                        </textarea>)
                    : (<input className="input" 
                        id={id} 
                        type={type} 
                        placeholder={placeholder} 
                        value={value} 
                        onChange={onChange}/>)
            }
        </div>
    );
}