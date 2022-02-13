import React, { useEffect } from 'react';
import './Editor.scss';
import ToolBar from './ToolBar.js';
import { useSelector } from 'react-redux';
import { changeMaximised } from '../assets/toolSlice.js';
import {changeText, newPrewiewerText} from '../assets/editorSlice';
import { useDispatch } from 'react-redux';


function Editor() {
 
    const dispatch = useDispatch();
    const text = useSelector(newPrewiewerText).text;
    
    const item = "editor-container";
    const maximisedValues = useSelector(changeMaximised);
    const maximised = () => {
        
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
    const handleChange = (e) => {
        dispatch(changeText(e.target.value));
    }

    return (
            <div id={maximised()}>
            <ToolBar name={'Editor'} value={item} />
            <textarea name={item}  id="editor" value={text}  onChange={handleChange} />
            </div> 
    )

}    

export default Editor;