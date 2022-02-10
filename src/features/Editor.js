import React from 'react';
import './Editor.scss';
import ToolBar from './ToolBar.js';
import { useSelector } from 'react-redux';
import { changeMaximised } from '../assets/toolSlice.js';


function Editor() {
    const item = "editor-container";
    const maximisedValues = useSelector(changeMaximised);
    const maximised = () => {
        console.log(maximisedValues)
        if (maximisedValues.maximisedEditor == true) {
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
            <ToolBar name={'Editor'} value={item} />
            <textarea name={item} id="editor" onChange={handleChange}/>
            </div> 
    )

}    

export default Editor;