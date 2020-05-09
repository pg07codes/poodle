import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ReactSortable } from "react-sortablejs";
import NoteInput from './NoteInput'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import { nanoid } from 'nanoid'

const useStyles = makeStyles({
    root: {
        padding: '1px 10px'
    },
    card: {
        maxWidth:'19vw',
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

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNotepadState(open);
    };


    const addNoteToNotepad = (note) => {

        let temp = [{ id: nanoid(10), value: note }, ...notes];
        setNotes(temp);
        localStorage.setItem('notes', JSON.stringify(temp));

    }

    const handleDelete = (id) => (e) => {

        let temp = notes.filter(i => (i.id !== id));
        setNotes(temp);
        localStorage.setItem('notes', JSON.stringify(temp));
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
        <div>

            <React.Fragment>
                <Button onClick={toggleDrawer(true)}>
                    <CreateIcon />
                </Button>
                <Drawer anchor='right' open={notepadState} onClose={toggleDrawer(false)}>
                    <div
                        className={`${classes.root}`}
                        role="presentation"
                    //onClick={toggleDrawer(false)}
                    // onKeyDown={toggleDrawer(false)}
                    >

                        <NoteInput addNoteToNotepad={addNoteToNotepad} />

                        <ReactSortable swapThreshold={0.3} list={notes} setList={setNotes}>
                            {notes.map(i => noteCards(i))}
                        </ReactSortable>

                    </div>
                </Drawer>
            </React.Fragment>

        </div>
    );
}