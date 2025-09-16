import InputField from "./InputField"
import InputRow from "./InputRow"
import "../styles/FormSection.css";

export default function FormSection({title, children, icon}) {
    const iconStyle = {
        width: "32px",
        display: "inline-block"
    }

    const formSectionHeaderStyle = {
        display: "flex",
        gap:"1rem",
        marginBottom:"1rem"
    }
    return (
        <section className="form-section">
            <div style={formSectionHeaderStyle}>
                <img style={iconStyle} src={icon}/>
                <h2 className="title">{title}</h2>
            </div>
            
            {children}
        </section>
    )
}