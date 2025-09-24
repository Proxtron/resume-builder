import ResumePage from "./ResumePage";
import DownloadResumeButton from "./DownloadResumeButton";
import "../styles/OutputColumn.css";

export default function OutputColumn(props) {

    return (
        <section className="output-column">
            <ResumePage {...props}/>
            <DownloadResumeButton/>
        </section>
        
    )
}