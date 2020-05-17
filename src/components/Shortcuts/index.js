import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddShortcutDialog from './AddShortcutDialog'
import { isUrlValid, getDomain } from '../../helpers/urlUtil'
import { nanoid } from 'nanoid'

const useStyles = makeStyles({
    root: {
        marginTop: "30vh"
    },
    paper: {
        height: 70,
        width: 70,
        margin: '1vh 1vw',
        borderRadius: "50%"
    },
    plusBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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


    let shortcutCards = () => {
        if (sc.length !== 0) {
            let temp = sc.map(e => (
                <Grid item key={e.id}>
                    <Paper onClick={openShortcut(e.url)} elevation={3}
                        className={`${classes.paper}  ${classes.plusBtn}`} >
                        
                        <img src={getDomain(e.url) + '/favicon.ico'}
                            
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://pro-cdn.pixelmator.com/pixelmator-photo/social/updates/img-twitter.jpg" }}
                            
                            alt={e.name} width={40} />
                    </Paper>
                </Grid>
            ));
            temp.push(
                <Grid item>
                    <Paper elevation={3} className={`${classes.paper}  ${classes.plusBtn}`} >
                        <AddCircleOutlineIcon onClick={openShortcutDialog} />
                    </Paper>
                </Grid>
            );
            return temp;
        } else {
            return (
                <Grid item>
                    <Paper elevation={3} className={`${classes.paper}  ${classes.plusBtn}`} >
                        <AddCircleOutlineIcon onClick={openShortcutDialog} />
                    </Paper>
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
