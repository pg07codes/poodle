import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    chip: {
        margin: '2px 2px'
    }
})

export default function Filters(props) {
    const classes = useStyles();

    let onClickHandler = (newFilter) => (e) => {
        props.setFilterAndFocus(newFilter);
    }

    const chips = (filter, isSelected) => (
        <Grid item className={classes.chip} key={filter}>
            <Chip
                label={filter}
                clickable
                onClick={onClickHandler(filter)}
                color="primary"
                size="small"
                variant={(isSelected ? "default" : "outlined")}
            />
        </Grid>
    );

    const FILTERS = ["google", "youtube", "duckduckgo", "soundcloud", "vimeo"];

    return (

        <Grid container justify='center'>

            <Grid item xs={1} md={3} ></Grid>

            {FILTERS.map(e => chips(e, (props.filter === e ? true : false)))}

            <Grid item xs={1} md={3}></Grid>

        </Grid>

    );
}