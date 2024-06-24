import React, {useState} from "react";

const Buttons = ({isHidden, setIsHidden}) => {
    
    const [isShifted, setIsShifted] = useState(false);    
    
    const hide = () => {
        console.log('hidden');
        setIsHidden(!isHidden);
    }

    const shift = () => {
        console.log('shifted');
        setIsShifted(!isShifted);
    }
    return (
        <div className="buttons">
            <button className="yes" onClick={hide}>
                Yes
            </button>
            <button className={`no ${ isShifted ? 'shift-right' : 'shift-back'}`} onClick={shift} >
                No
            </button>
        </div>
    );
}

export default Buttons;