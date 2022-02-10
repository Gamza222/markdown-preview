import React from 'react';
import './ToolBar.scss';
import { maximiseValue } from '../assets/toolSlice.js';
import { changeMaximised } from '../assets/toolSlice.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function ToolBar(props) {

    const dispatch = useDispatch();

    //changing value of maximised and send it to store via reducer
    const handleClick = () => {
        dispatch(maximiseValue(props.value));
    }

    console.log(props);
    return (
        
            <div id="toolbar">
                <h1 id="toolbar-header">{props.name}</h1>
                <button className="fa-solid fa-maximize" id='max-btn' onClick={handleClick} />
            </div>
    )

}    

export default ToolBar;