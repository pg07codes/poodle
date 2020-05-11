import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done'
import FaceIcon from '@material-ui/icons/Face'
import Chip from '@material-ui/core/Chip'


export default function Filters(props) {

    

    let onClickHandler = (newFilter) => (e) => {
        props.setFilter(newFilter);
    }

    const chips = (filter, isSelected) => (
        <Grid item xs key={filter}>
            <Chip
                icon={<FaceIcon />}
                label={filter}
                clickable
                onClick={onClickHandler(filter)}
                color="secondary"
                variant = {(isSelected ? "outlined" : "default")}
                deleteIcon={<DoneIcon />}
            />
        </Grid>
    );

    const FILTERS=["google","youtube"];

    return (

        <Grid container justify="center">

            <Grid item xs={3}></Grid> {/*dummy items for proper alignment  */}

            {FILTERS.map(e => chips(e, (props.filter === e ? false : true)))}

            <Grid item xs={3}></Grid>  {/* dummy items for proper alignment*/}

        </Grid>

    );
}