import React from 'react';
import './Prewiew.scss';
import ToolBar from './ToolBar.js';
import { useSelector } from 'react-redux';
import { changeMaximised } from '../assets/toolSlice.js';
import {newPrewiewerText} from '../assets/editorSlice.js';
import { marked } from "marked";


function Prewiew() {
    const item = "prewiew-container";
    const maximisedValues = useSelector(changeMaximised);
    const maximised = () => {
        
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
    const text = useSelector(newPrewiewerText).text;

    

    return (
            <div id={maximised()}>
            <ToolBar name="Prewiewer" value={item} />
            <div id="prewiew-main">
            <div id="prewiew-main__text" dangerouslySetInnerHTML={{__html: marked(text)}}/>
            </div>
            </div> 
    )

}    

export default Prewiew;