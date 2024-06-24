import React from "react";

const Img = ({isHidden}) => {
    return (
        <img className={`image ${isHidden ? 'hide': ''}`} src="https://i.pinimg.com/736x/4b/05/b7/4b05b7b1b1ff972795f158d8908a71ba.jpg" alt="##"></img>        
    );
}
 
export default Img;