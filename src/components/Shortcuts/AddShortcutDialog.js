import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {isUrlValid} from '../../helpers/urlUtil'

export default function Di(props) {
  const [open, setOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  let nameRef = React.useRef();
  let urlRef = React.useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nameInputProps = {
    ref: nameRef,
    maxLength:22
  }
  const urlInputProps = {
    ref: urlRef
  }

  const handleSaveClose = () => {
    if(nameRef.current.value.trim()!==""){
      
      if (isUrlValid(urlRef.current.value) === -1) {
        setIsError(true);
        urlRef.current.value = "";
      } else {
        setIsError(false);
        props.addShortcutToLs(nameRef.current.value, urlRef.current.value);
        nameRef.current.value = "";
        urlRef.current.value = "";
        setOpen(false);
      }
      
    }
    
  };

  return (
    <div>
      <Button ref={props.btnRef} onClick={handleClickOpen} style={{ display: 'none' }}>
        .
      </Button>
      <Dialog maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="form-dialog">
        <DialogTitle id="form-dialog">New Shortcut</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Name"
            margin="normal"
            variant="outlined"
            type="text"
            size="small"
            inputProps={nameInputProps}
          />
          <br />
          <TextField
            margin="normal"
            variant="outlined"
            label="Enter Valid Url"
            type="text"
            error={isError}
            size="small"
            inputProps={urlInputProps}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}