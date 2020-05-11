import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import getShortNews from './../../helpers/getShortNews'
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DehazeIcon from '@material-ui/icons/Dehaze';

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom:'3vh',
        left:'1vw'
    },
    newsDrawer: {
        maxHeight: "60vh !important"
    }
});

export default function ShortNews() {
    const classes = useStyles();
    const [newsGroupState, setNewsGroupState] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {

        getShortNews().then((resp) => {
            setNews(resp)
        })

    }, [])


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNewsGroupState(open);
    };

    return (

        <div className={classes.root}>
            <Tooltip title="HackerNews" aria-label="HackerNews">
                <Fab onClick={toggleDrawer(true)} size="medium" color="secondary" aria-label="edit">
                    <DehazeIcon />
                </Fab>
            </Tooltip>
            <Drawer anchor='bottom' open={newsGroupState} onClose={toggleDrawer(false)}>
                <div
                    className={classes.newsDrawer}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >

                    {news.map(i => (
                        <Paper key={i.id}>
                            <h2>{i.title}</h2>
                            <a href={i.url} target="_blank" >click here to read</a>
                            <h5>{i.by}</h5>
                        </Paper>

                    ))}

                </div>
            </Drawer>
        </div>

    );
}