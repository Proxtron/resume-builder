import InputField from "./InputField"
import InputRow from "./InputRow"
import "../styles/FormSection.css";

export default function FormSection({title, children}) {
    return (
        <section className="form-section">
            <h2 className="title">{title}</h2>
            {children}
        </section>
    )
}