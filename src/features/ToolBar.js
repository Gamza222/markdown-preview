import React from 'react';
import './ToolBar.scss';

function ToolBar(props) {

    console.log(props);
    return (
        
            <div id="toolbar">
                <h1 id="toolbar-header">{props.name}</h1>
                <botton class="fa-solid fa-maximize" id='max-btn' />
            </div>
    )

}    

export default ToolBar;