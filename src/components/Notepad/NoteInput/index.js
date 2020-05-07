import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Add from '@material-ui/icons/Add';


export default function NoteInput(props) {

    const [note, setNote] = useState("");

    function handleChange(e) {
        setNote(e.target.value)
    }

    function handleSubmit(e) {
        // Handling Enter Press for submit
        console.log('clicked')
        console.log(note, ' passed')
        props.addNoteToNotepad(note)

    }

    const InputProps = {
        endAdornment: (
            <InputAdornment onClick={handleSubmit} position="end">
                <Add />
            </InputAdornment>
        )
    }

    return (

        <TextField onChange={handleChange} margin="normal" InputProps={InputProps} />

    );
}
