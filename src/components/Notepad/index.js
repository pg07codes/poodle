import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    list: {
        width: 'auto', // nothing happening from it man.
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [notepadState, setNotepadState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setNotepadState(open);
    };

    return (
        <div>

            <React.Fragment>
                <Button onClick={toggleDrawer(true)}>right</Button>
                <Drawer anchor ='right' open={notepadState} onClose={toggleDrawer(false)}>
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Paper>this is a paper. you need a paper.</Paper>
                        {/* draggable list to be kept here with map ofcourse */}

                    </div>
                </Drawer>
            </React.Fragment>

        </div>
    );
}