import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done'
import Chip from '@material-ui/core/Chip'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function Filters(props) {



    let onClickHandler = (newFilter) => (e) => {
        props.setFilter(newFilter);
    }

    const chips = (filter, isSelected) => (
        <Grid item xs key={filter}>
            <Chip
                icon={isSelected ? <CheckCircleOutlineIcon /> : null}
                label={filter}
                clickable
                onClick={onClickHandler(filter)}
                color="secondary"
                size="small"
                variant={(isSelected ? "default" : "outlined")}
                deleteIcon={<DoneIcon />}
            />
        </Grid>
    );

    const FILTERS = ["google", "youtube", "duckduckgo", "soundcloud", "vimeo"];

    return (

        <Grid container justify="center">

            <Grid item xs={3}></Grid> {/*dummy items for proper alignment  */}

            {FILTERS.map(e => chips(e, (props.filter === e ? true : false)))}

            <Grid item xs={3}></Grid>  {/* dummy items for proper alignment*/}

        </Grid>

    );
}