import React, { useState } from "react";
import Buttons from './Buttons';
import Img from './Img';
import './PookieContainer.css'

const PookieContainer = () => {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="pookie-container">
            <h1> Marry me pookiee?</h1>
            <Img isHidden={isHidden}/>
            <Buttons isHidden={isHidden} setIsHidden={setIsHidden}/>
        </div>
    );
}
 
export default PookieContainer;