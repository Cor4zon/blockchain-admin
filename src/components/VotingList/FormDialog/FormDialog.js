import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import APIClient from "../../../services/APIClient";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [ title, setTitle ] = React.useState("");
    const [ description, setDescription ] = React.useState("");
    const [ deadline, setDeadline ] = React.useState("");
    const client = new APIClient();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const deadlineChangeHandler = (event) => {
        setDeadline(event.target.value);
    }

    const addVotingHandler = (event) => {
        event.preventDefault();

        client.addVoting(title, description, deadline).then(() => {
            console.log('voting added');
        });

        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New voting</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, enter all information about voting:
                        title, description and deadline.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={titleChangeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={descriptionChangeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        type="date"
                        fullWidth
                        variant="standard"
                        onChange={deadlineChangeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addVotingHandler}>Add voting</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
