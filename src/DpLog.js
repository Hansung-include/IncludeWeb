import { React, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import activity from "./activity"

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { height } from "@mui/system";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })
    (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
}),
}));

const MyCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const semester = useSelector(state => { return state.semester})

    const getActivityName = () => {
        if (props.log.activityName === undefined) return ""
        else return props.log.activityName
    }

    const getParticipant = () => {
        if (props.log.participant === undefined) return ""
        else return props.log.participant.map(m => <span>{m}<br/></span>)
    }

    const getContents = () => {
        if (props.log.contents === undefined) return ""
        else return props.log.contents
    }

    const getPhoto = () => {
        try {
            return require("./img/" + semester + "/" + props.idx + ".png")
        } catch (error) {
            return require("./img/default.png")
        }
    }
    
    return (
        <div className="CardDp">
        <Card sx={{ maxWidth: 345, minHeight : 500}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                #in
                </Avatar>
                }
                title={getActivityName()}
            />

            <CardMedia
                component="img"
                height="194"
                image={getPhoto()}
                alt=""
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {getContents()}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>참여:</Typography>
                        <Typography paragraph>
                        {
                            getParticipant()
                        }
                        </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </div>
    );
}

const NoActivityLog = () => {
    return (
        <div id="NoActivityLog">
            <div> 아직 아무 활동도 하지 않았습니다. </div>
        </div>
    )
}

const DpLog = () => {
    const semester = useSelector(state => { return state.semester})
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

    return (
        <div id="DpMain">
            {
                is_in_contests() ? log.map((item, idx) => <MyCard log={item} idx={idx} key={idx}/>) : <NoActivityLog />
            }
        </div>
    )
}

export default DpLog