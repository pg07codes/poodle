import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import FeedbackBar from '.././FeedbackBar'

const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: '3vh',
        right: '1vw'
    }
})

export default function CustomBackground() {

    const classes = useStyles();

    const inputFile = React.useRef();
    const FeedbackBtnRef = React.useRef();

    useEffect(() => {

        if (localStorage.getItem('bckgrd') !== null) {
            document.body.style['background-image'] = `url("${localStorage.getItem('bckgrd')}")`;
            document.body.style['background-attachment'] = "fixed";
            document.body.style['background-repeat'] = "no-repeat";
            document.body.style['background-size'] = "cover";
        }
    }, []); // setting body styling once is sufficient

    function handleChange(ev) {

        let reader = new FileReader();

        if (ev.target.files.length !== 0 && ev.target.files[0].size < 2000000) {

            reader.readAsDataURL(ev.target.files[0]);

            reader.onload = i => {

                localStorage.setItem('bckgrd', i.target.result);
                document.body.style['background-image'] = `url("${i.target.result}")`;
                document.body.style['background-attachment'] = "fixed";
                document.body.style['background-repeat'] = "no-repeat";
                document.body.style['background-size'] = "cover";
                // console.log('i ran man') fix this bug.........auto click on page load.
                FeedbackBtnRef.current.click();

            }
        }

    }

    function AddBackgroundHandler() {
        inputFile.current.click();
    }

    return (
        <div className={classes.root}>
            <Tooltip title="Custom Background" aria-label="Custom Background">
                <Fab color="primary" size="medium" onClick={AddBackgroundHandler} aria-label="edit">
                    <AddPhotoIcon />
                </Fab>
            </Tooltip>
            <input style={{ display: 'none' }} ref={inputFile} onChange={handleChange} type='file' accept="image/png, image/jpeg ,image/jpg" />

            <FeedbackBar btnRef={FeedbackBtnRef} message={'Background set successfully'} />

        </div >
    );

}