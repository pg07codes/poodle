import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import parseSearchQuery from './../../helpers/parseSearchQuery'
import Notepad from './../Notepad'

import Filters from './Filters'

export function Search() {

    const [searchQuery, setSearchQuery] = useState("");

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    function handleSubmit(e) {
        // Handling Enter Press for submit
        if (e.keyCode === 13) {
            parseSearchQuery(searchQuery);
            e.target.value="";
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


        <Grid container justify="center">

            <Grid container justify="center">
                <Grid item xs={10} sm={8} md={6}>

                    <TextField onChange={handleChange} fullWidth={true} margin="normal" inputProps={inputProps} InputProps={InputProps} />

                </Grid>

                <Notepad />

                <Filters/>
                </Grid>

        </Grid>



    );
}
