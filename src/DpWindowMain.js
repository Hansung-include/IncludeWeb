import { React, useState } from "react"
import { Provider, useSelector, useDispatch } from 'react-redux';
import reduer from "./DpwindowStore";
import DpLog from "./DpLog"
import DpMember from "./DpMember"
import activity from "./activity"
import "./DpWindowMain.css"

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const DpWindow = () => {
    const semester = useSelector(state => { return state.semester})
    const dp = useSelector(state => {return state.displayContents})
    const dispatch = useDispatch()
    const log = activity[semester]

    const is_in_contests = () => {
        return log.length !== 1 && (() => {
                try {
                    let temp = activity[semester]
                } catch (error) {
                    return false
                }
                return true
            }
        )
    }

    const changeDp = (contents) => {
        dispatch({type : "SET_DP", newContents : {contents}})
    }

    return(
        <div>
            <div id="btnPlace">
                <ButtonGroup aria-label="medium secondary button group">
                    <Button onClick={(e) => {dispatch({type : "SET_DP", newContents : "log"})}}>log</Button>
                    <Button onClick={(e) => {dispatch({type : "SET_DP", newContents : "member"})}}>member</Button>
                </ButtonGroup>
                <span style={{marginLeft : "3em"}} >학기 : {semester} </span>
            </div>

            <div id="DpMain">
            {
                // is_in_contests() ? log.map((item, idx) => <MyCard log={item} idx={idx} key={idx}/>) : <NoActivityLog />
                dp === "log" ? <DpLog /> : <DpMember />
            }
            {/* <DpLog /> */}
            </div>
        </div>
    )
}

export default DpWindow;