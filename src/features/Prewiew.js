import React from 'react';
import './Prewiew.scss';
import ToolBar from './ToolBar.js';
import { useSelector } from 'react-redux';
import { changeMaximised } from '../assets/toolSlice.js';

function Prewiew() {
    const item = "prewiew-container";
    const maximisedValues = useSelector(changeMaximised);
    const maximised = () => {
        console.log(maximisedValues)
        if (maximisedValues.maximisedPrewiwer == true) {
            return 'maximised';
        } else if (
            maximisedValues.maximisedEditor == false &&
            maximisedValues.maximisedPrewiwer == false
        ) {
            return item;
        } else {
            return 'none';
        }
    }
    const handleChange = () => {

    }

    return (
            <div id={maximised()}>
            <ToolBar name="Prewiewer" value={item} />
            <div id="prewiew-main">
            <p id="prewiew-main__text">aafsdfads</p>
            </div>
            </div> 
    )

}    

export default Prewiew;