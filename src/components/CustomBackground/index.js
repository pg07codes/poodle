import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

});

export default function CustomBackground() {

    useEffect(() => {

        if (localStorage.getItem('bckgrd') !== null) {
            document.body.style['background-image'] = `url("${localStorage.getItem('bckgrd')}")`;
            document.body.style['background-attachment'] = "fixed";
            document.body.style['background-repeat'] = "no-repeat";
            document.body.style['background-size'] = "cover";
        }
    })

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

            }
        }



    }

    return (
        <div>
            <input onChange={handleChange} type='file' accept="image/png, image/jpeg ,image/jpg" />
        </div>
    );

}