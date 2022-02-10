import React from 'react';
import './Prewiew.scss';
import ToolBar from './ToolBar.js'

function Prewiew() {
    const item = "prewiew-container";
    const handleChange = () => {

    }

    return (
            <div id={item}>
            <ToolBar name="Prewiewer" value={item} />
            <div id="prewiew-main">
            <p id="prewiew-main__text">aafsdfads</p>
            </div>
            </div> 
    )

}    

export default Prewiew;