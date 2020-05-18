import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import parseSearchQuery from './../../helpers/parseSearchQuery';
import { makeStyles } from '@material-ui/core/styles';
import Filters from './Filters';

const useStyles = makeStyles({
    input: {
        backgroundColor: 'white',
        borderRadius:'7px'
    }
});

    

export default function Search() {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("google");
    const inputRef=React.useRef();

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    function setFilterAndFocus(newFilter){
        setFilter(newFilter);
        inputRef.current.focus();
    }

    function handleEnterToSubmit(e) {
        if (e.keyCode === 13 && searchQuery.trim() !== "") {

            parseSearchQuery(filter, searchQuery);
            e.target.value = "";
            setSearchQuery("");
        }
    }

    function handleClickSubmit() {

        if (searchQuery.trim() !== "") {
            parseSearchQuery(filter, searchQuery);
            inputRef.current.value = "";
            setSearchQuery("");
        }

    }

    const inputProps = {
        onKeyDown: handleEnterToSubmit,
        ref:inputRef
    }

    const InputProps = {
        endAdornment: (
            <InputAdornment position="end">
                <SearchIcon onClick={handleClickSubmit}/>
            </InputAdornment>
        )
    }

    return (

        <React.Fragment>

            <Grid container>

                <Grid item xs={2} md={3} />   {/* dummy */}

                <Grid item xs={8} md={6}>

                    <TextField className={classes.input} onChange={handleChange} fullWidth={true} autoFocus
                    label="Search anywhere" margin="normal" inputProps={inputProps} InputProps={InputProps} variant="outlined" />

                </Grid>

                <Grid item xs={2} md={3} />   {/* dummy */}

            </Grid>

            <Filters filter={filter} setFilterAndFocus={setFilterAndFocus} />

        </React.Fragment>


    );
}
