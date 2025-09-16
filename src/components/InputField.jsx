import "../styles/InputField.css";

export default function InputField({id, name, type="text"}) {
    return (
        <div>
            <label className="input-label" for={id}>{name}</label>
            <input className="input" id={id} type={type}/>
        </div>
    );
}