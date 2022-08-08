import React from "react"
import "./ContextWindow.css"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const RouteBtn = (props) => {
    return(
        <div>
            <Button size="medium">{ props.name }</Button>
        </div>
    )
}

const ContextWindow = () => {
    const semester = ["22-1"]
    {
        for(let i = 0; i < 3; i++) {
            let newSemester = ""
            if (semester[semester.length - 1][3] === "1") {
                for (let j = 0; j < 3; j++) newSemester += semester[i][j]
                newSemester += "2"
            }
            else {
                newSemester += "" + (parseInt(semester[i]) + 1)
                newSemester += "-1"
            }
            semester.push(newSemester)
        }
    }
    return(
        <div>
            <div>
                <div className="topWhiteSpace" />
                <div id="mainWindow">
                    <ButtonGroup variant="text" orientation="vertical" aria-label="outlined primary button group" size="medium">
                        { semester.map(s => <RouteBtn name={s}/>) }
                    </ButtonGroup>
                    <div id="viewer">.</div>
                </div>
            </div>
        </div>
    );
}

export default ContextWindow;