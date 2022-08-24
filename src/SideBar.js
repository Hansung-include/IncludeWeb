import { React, useState } from "react"
import { Provider, useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const SetSemesterArray = (cnt) => {
    const semester = ["22-1"]
    {
        for(let i = 0; i < cnt; i++) {
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
    return semester
}

const ListBtn = (props) => {
    const dispatch = useDispatch()
    const handleListItemClick = (event) => {
        dispatch({ type: "SET_SEMESTER", newSemester: props.name })
    };
    
    return (
        <div>
            <ListItemButton
            onClick={handleListItemClick}
            >
                <ListItemText primary={props.name} />
            </ListItemButton>
            <Divider />
        </div>
    )
}

const SideBar = () => {
    const semester = SetSemesterArray(3)
    return(
        <div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        semester.map(s => <ListBtn name={s} idx={semester.indexOf(s)} key={s}/>)
                    }
                </List>
            </Box>
        </div>
    )
}

export default SideBar;