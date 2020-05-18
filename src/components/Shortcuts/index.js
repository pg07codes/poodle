import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddShortcutDialog from './AddShortcutDialog'
import { isUrlValid, getDomain } from '../../helpers/urlUtil'
import { nanoid } from 'nanoid'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        marginTop: "40vh"
    },
    paper: {
        height: 60,
        width: 60,
        margin: '1vh 1vw',
        borderRadius: "50%",
        cursor: 'pointer'
    },
    centerItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    scFont: {
        fontSize: '0.7em',
        fontWeight:'lighter'
    }
});

export default function Shortcuts(props) {
    const classes = useStyles();
    let btnRef = React.useRef();
    // sc stands for shortcuts
    const [sc, setsc] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('sc') !== null) {
            setsc(JSON.parse(localStorage.getItem('sc')))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('sc', JSON.stringify(sc));
    }, [sc])

    const addShortcutToLs = (name, url) => { // called after ensuring name,url are non-empty
        let temp = localStorage.getItem('sc');

        if (temp !== null)
            temp = JSON.parse(temp);
        else
            temp = []

        if (isUrlValid(url) === 1)
            temp.push({ id: nanoid(3), name, url });
        else
            temp.push({ id: nanoid(3), name, url: `http://${url}` });

        setsc(temp);  // will trigger side-effect which will add to LS as a result
    }

    const openShortcutDialog = () => {
        btnRef.current.click();
    }

    const openShortcut = (url) => () => {
        window.open(url, '_blank');
    }

    const deleteShortcut = (id) => () => {
        let temp = localStorage.getItem('sc');
        temp = JSON.parse(temp);
        temp = temp.filter(el => el.id !== id)
        setsc(temp);
    }

    let shortcutCards = () => {
        if (sc.length !== 0) {
            let temp = sc.map(e => (
                <Grid item key={e.id}>
                    <Paper onClick={openShortcut(e.url)} elevation={3}
                        className={`${classes.paper}  ${classes.centerItem}`} >

                        <img src={getDomain(e.url) + '/favicon.ico'}

                            onError={(e) => { e.target.onerror = null; e.target.src = "%PUBLIC_URL%/poodle.png" }} alt="x"
                            width={32} />
                    </Paper>
                    <span className={`${classes.centerItem} ${classes.scFont}`}>{e.name}
                        <DeleteIcon fontSize='inherit' style={{ cursor: 'pointer'}}
                            color='secondary' onClick={deleteShortcut(e.id)} />

                    </span>
                </Grid>
            ));
            temp.push(
                <Grid item>
                    <Paper elevation={3} className={`${classes.paper}  ${classes.centerItem}`} >
                        <AddCircleOutlineIcon onClick={openShortcutDialog} />
                    </Paper>
                    <span className={`${classes.centerItem} ${classes.scFont}`}>
                        Add Shortcut
                    </span>
                </Grid>
            );
            return temp;
        } else {
            return (
                <Grid item>
                    <Paper elevation={3} className={`${classes.paper}  ${classes.centerItem}`} >
                        <AddCircleOutlineIcon onClick={openShortcutDialog} />
                    </Paper>
                    <span className={`${classes.centerItem} ${classes.scFont}`}>
                        Add Shortcut
                    </span>
                </Grid>
            );
        }
    }

    return (
        <Grid container alignItems="center" className={classes.root} justify="center">
            <Grid item xs={6} lg={4}>

                <Grid container alignItems="center" justify="center">
                    {shortcutCards()}
                </Grid>

            </Grid>
            <AddShortcutDialog addShortcutToLs={addShortcutToLs} btnRef={btnRef} />
        </Grid>
    );
}
