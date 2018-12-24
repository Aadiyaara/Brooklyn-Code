import React, { Component } from 'react';

class Airbar extends Component{
    render(){
        return(
            <div className='airbar' id='airbar'>
                <div className='airbar_handler airbar_handler_html'>
                    <img src='./res/assets/img/decals/htmlHandle.png'></img>
                </div>
                <div className='airbar_handler airbar_handler_css'>
                    <img src='./res/assets/img/decals/cssHandle.png'></img>
                </div>
                <div className='airbar_handler airbar_handler_js'>
                    <img src='./res/assets/img/decals/jsHandle.png'></img>
                </div>
                <div className='airbar_handler airbar_handler_menu'>
                    <img src='./res/assets/img/decals/menuHandle.png'></img>
                </div>
                <div className='airbar_handler airbar_handler_settings'>
                    <img src='./res/assets/img/decals/settingsHandle.png'></img>
                </div>
            </div>
        )
    }
}


export default Airbar