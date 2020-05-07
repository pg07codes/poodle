import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import DoneIcon from '@material-ui/icons/Done'
import FaceIcon from '@material-ui/icons/Face'
import Chip from '@material-ui/core/Chip'


export default function Filters() {

    const [filter, setFilter] = useState("");

    let onClickHandler = (newFilter) => (e) => {
        setFilter(newFilter);
    }

    const chips = (filter, isSelected) => (
        <Grid item xs key={filter}>
            <Chip
                icon={<FaceIcon />}
                label={filter}
                clickable
                onClick={onClickHandler(filter)}
                size='small'
                color="primary"
                variant = {(isSelected ? "outlined" : "default")}
                deleteIcon={<DoneIcon />}
            />
        </Grid>
    );

    return (

        <Grid container justify="center">

            <Grid item xs={3}></Grid> {/*dummy items for proper alignment  */}

            {["ABC", "PQR", "XYZ"].map(e => chips(e, (filter === e ? false : true)))}

            <Grid item xs={3}></Grid>  {/* dummy items for proper alignment*/}

        </Grid>

    );
}