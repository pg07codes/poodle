import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ReactSortable } from "react-sortablejs";
import NoteInput from './NoteInput'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { nanoid } from 'nanoid'

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: '3vh',
        right: '1vw'
    },
    notepadDrawer: {
        padding: '1px 10px',
        background: 'linear-gradient(100deg, #A5E9E1 70%, #DDF5F7 70%)',
        minHeight: '99%',
        overflow:'auto',
        '&::-webkit-scrollbar':{
            display:'none'
        }
    },
    card: {
        minWidth: 'inherit',
        maxWidth: '20vw', // not mobile friendly tho
        margin: '5px 1px'
    }
});

export default function TemporaryDrawer() {

    const classes = useStyles();
    const [notepadState, setNotepadState] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('notes') !== null) {
            setNotes(JSON.parse(localStorage.getItem('notes')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNotepadState(open);
    };


    const addNoteToNotepad = (note) => {

        let temp = [{ id: nanoid(10), value: note }, ...notes];
        setNotes(temp);
    }

    const handleDelete = (id) => (e) => {

        let temp = notes.filter(i => (i.id !== id));
        setNotes(temp);
    }

    const noteCards = (i) => (
        <Card onDoubleClick={handleDelete(i.id)} key={i.id} className={classes.card}>
            <CardContent>
                <Typography variant="caption" component="p">
                    {i.value}
                </Typography>
            </CardContent>
        </Card>
    );


    return (
        <div className={classes.root}>

            <Tooltip title="Add Note" aria-label="Add Note">
                <Fab onClick={toggleDrawer(true)} size="medium" color="primary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Tooltip>
            <Drawer anchor='right' open={notepadState} onClose={toggleDrawer(false)}>
                <div
                    className={classes.notepadDrawer}
                    role="presentation"
                //onClick={toggleDrawer(false)}
                // onKeyDown={toggleDrawer(false)}
                >
                    <NoteInput addNoteToNotepad={addNoteToNotepad} />

                    <ReactSortable swapThreshold={0.5}
                        list={notes} setList={setNotes}>

                        {notes.map(i => noteCards(i))}

                    </ReactSortable>

                </div>
            </Drawer>

        </div>
    );
}