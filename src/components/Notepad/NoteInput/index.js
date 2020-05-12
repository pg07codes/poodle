import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Add from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    info: {
        maxWidth:'19vw',
        padding:'1px 5px',
        '& p':{
            fontSize:'0.5em'
        }
    }

});


export default function NoteInput(props) {
    const classes = useStyles();
    const [note, setNote] = useState("");
    let inputRef = React.useRef();

    function handleChange(e) {
        setNote(e.target.value);
    }

    function handleEnterToSubmit(e) {
        if (e.keyCode === 13 && note.trim() !== "") {

            props.addNoteToNotepad(note);
            e.target.value = "";
            setNote("");
        }
    }

    function handleClickSubmit() {

        if (note.trim() !== "") {
            props.addNoteToNotepad(note);
            inputRef.current.value = "";
            setNote("");
        }

    }

    const inputProps = {
        onKeyDown: handleEnterToSubmit,
        ref: inputRef,
        maxLength: 280
    }

    const InputProps = {
        endAdornment: (
            <InputAdornment onClick={handleClickSubmit} position="end">
                <Add />
            </InputAdornment>
        )
    }

    return (

        <React.Fragment>
            <TextField onChange={handleChange} autoFocus margin="dense" inputProps={inputProps} InputProps={InputProps} />
            <div className={classes.info}>
                <p>Tips: Rearrange notes by dragging. Double click a note to delete.</p>
            </div>
        </React.Fragment>

    );
}
