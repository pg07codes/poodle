import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import getShortNews from './../../helpers/getShortNews'
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: '3vh',
        left: '1vw'
    },
    newsDrawer: {
        maxHeight: "55vh"
    },
    newsCardsStyle:{
        margin:'10px 0' // do not change left/right margin or layout breaks 
    },
    newsTextStyle:{
        padding:'7px'
    },
    paperStyle:{
        background:'#DDF5F7'
    },
    newsContainerStyle:{
        background:'linear-gradient(100deg, #A5E9E1 50%, #DDF5F7 50%)'
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

    function newsCards(i) {
        return (
            <React.Fragment key={i.id} >
                <Grid item xs={1} md={2} />   {/* dummy */}

                <Grid item xs={10} md={8} className={classes.newsCardsStyle} >

                    <Paper elevation={3} className={classes.paperStyle} >
                        <Typography className={classes.newsTextStyle} variant="h5" gutterBottom >
                            {i.title}
                        </Typography>

                        <Typography className={classes.newsTextStyle} variant="body1" gutterBottom>
                            Read Full Story at: <a href={i.url} >{i.website}</a>
                        </Typography>


                        <Typography className={classes.newsTextStyle} variant="subtitle2" display="block" gutterBottom>
                            Story by: {i.by}
                        </Typography>

                    </Paper>
                </Grid>

                <Grid item xs={1} md={2} />   {/* dummy */}
            </React.Fragment>

        );
    }

    return (

        <div className={classes.root}>
            <Tooltip title="HackerNews" aria-label="HackerNews">
                <Fab onClick={toggleDrawer(true)} size="medium" color="primary" aria-label="edit">
                    <DehazeIcon />
                </Fab>
            </Tooltip>
            <Drawer anchor='bottom' open={newsGroupState} onClose={toggleDrawer(false)}>
                <div
                    className={classes.newsDrawer}
                    role="presentation"
                    // onClick={toggleDrawer(false)}
                    // onKeyDown={toggleDrawer(false)}
                >
                    <Grid container className={classes.newsContainerStyle}>
                        {news.map(i => newsCards(i))}
                    </Grid>

                </div>
            </Drawer>
        </div>

    );
}