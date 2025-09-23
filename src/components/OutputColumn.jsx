import ResumePage from "./ResumePage";
import "../styles/OutputColumn.css";

export default function OutputColumn({values}) {

    return (
        <section className="output-column">
            <h2>Resume</h2>
            <ResumePage values={values}/>
        </section>
        
    )
}