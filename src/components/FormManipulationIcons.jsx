import "../styles/FormManipulationIcons.css";
import editIcon from "../../public/edit-filled-svgrepo-com.svg";
import confirmIcon from "../../public/confirm-svgrepo-com.svg";

export default function FormManipulationIcons({isEditable, clickHandler}) {

    return (
        <button className="icon-btn" onClick={clickHandler}>
            {
                isEditable 
                    ? (<img className="icon-style-md" alt="Submit section edit" src={confirmIcon}/>)
                    : (<img className="icon-style-md" alt="Start editing section" src={editIcon}/>) 
            }
        </button>
    );
}