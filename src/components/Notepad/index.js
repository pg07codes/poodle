import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ReactSortable } from "react-sortablejs";
import NoteInput from './NoteInput'

const useStyles = makeStyles({
    root:{
        minWidth:"20vw !important"
    },
    list: {
        width: '250', // nothing happening from it man.
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [notepadState, setNotepadState] = useState(false);
    const [notes, setNotes] = useState([
        { id: 1, name: "shakile" },
        { id: 2, name: "fiona" },
        { id: 3, name: "lina" }
    ]);


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNotepadState(open);
    };


    const addNoteToNotepad = (note) => {
        
        let newId = notes.length + 1;
        setNotes([...notes, { id: newId, name: note }]);

    }

    return (
        <div>

            <React.Fragment>
                <Button onClick={toggleDrawer(true)}> notepad </Button>
                <Drawer anchor='right' open={notepadState} onClose={toggleDrawer(false)}>
                    <div
                        className={`${classes.list} ${classes.root}`}
                        role="presentation"
                    //onClick={toggleDrawer(false)}
                    // onKeyDown={toggleDrawer(false)}
                    >

                        <NoteInput addNoteToNotepad={addNoteToNotepad} />

                        <ReactSortable list={notes} setList={setNotes}>
                            {notes.map(item => (
                                <Paper key={item.id}>
                                    <div>{item.name}</div>
                                </Paper>
                            ))}
                        </ReactSortable>

                    </div>
                </Drawer>
            </React.Fragment>

        </div>
    );
}