import React from 'react';
import './Editor.scss';
import ToolBar from './ToolBar.js'

function Editor() {
    const item = "editor-container";
    const handleChange = () => {

    }

    return (
            <div id={item}>
            <ToolBar name={'Editor'} value={item} />
            <textarea name={item} id="editor" value="markdown" onChange={handleChange}/>
            </div> 
    )

}    

export default Editor;