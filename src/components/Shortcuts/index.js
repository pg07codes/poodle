import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles({
    root: {
        marginTop: "20vh"
    },
    paper: {
        height: 90,
        width: 150,
        margin: '1vh 2vw'
    }
});

export default function Shortcuts(props) {
    const classes = useStyles();

    let shortcut = (id) => {
        return (
            <Grid item key={id}>
                <Paper elevation={3} className={classes.paper} >
                    <AddCircleOutlineIcon />
                </Paper>
            </Grid>
        );
    }

    return (
        <Grid container alignItems="center" className={classes.root} justify="center">

            {[...Array(props.number)].map(i => shortcut(i))}

        </Grid>
    );
}
