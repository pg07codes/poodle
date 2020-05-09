import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import parseSearchQuery from './../../helpers/parseSearchQuery'
import Notepad from './../Notepad'

import Filters from './Filters'

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    function handleSubmit(e) {
        // Handling Enter Press for submit
        if (e.keyCode === 13) {
            parseSearchQuery(searchQuery);
            e.target.value = "";
            setSearchQuery("");
        }

    }

    const inputProps = {
        onKeyDown: handleSubmit
    }

    const InputProps = {
        endAdornment: (
            <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>
        )
    }

    return (

        <React.Fragment>

            <Grid container>

                <Grid item xs={2}  md={3} />   {/* dummy */}

                <Grid item xs={8}  md={6}>

                    <TextField onChange={handleChange} fullWidth={true} margin="normal" inputProps={inputProps} InputProps={InputProps} />

                </Grid>

                <Grid item xs sm={1} md={2} />
                <Grid item xs={1}  md={1} >

                    <Notepad />

                </Grid>

            </Grid>

            <Filters />

        </React.Fragment>


    );
}
