import { React, useState } from "react"
import { Provider, useSelector, useDispatch } from 'react-redux';

import SideBar from "./SideBar";
import DpWindowMain from "./DpWindowMain";

import "./ContextWindow.css"
import reduer from "./DpwindowStore";

const ContextWindow = () => {
    return(
        <div>
            <Provider store={reduer}>
                <div className="topWhiteSpace" />
                <div id="mainWindow">
                    <SideBar />
                    <div id="spaceSideBarDpwindow" />
                    <DpWindowMain />
                    {/* <DisplayWindow /> */}
                </ div>
            </Provider>
        </div>
    );
}

export default ContextWindow;