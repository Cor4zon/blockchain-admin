import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import APIClient from "../../services/APIClient";


export default function VotingOptionFormDialog({ votingId }) {
    const [open, setOpen] = React.useState(false);
    const [ title, setTitle ] = React.useState("");
    const [ description, setDescription ] = React.useState("");
    const [ pubkey, setPubkey ] = React.useState("");
    const [ privkey, setPrivkey ] = React.useState("");
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

    const pubkeyChangeHandler = (event) => {
        setPubkey(event.target.value);
    }

    const privkeyChangeHandler = (event) => {
        setPrivkey(event.target.value);
    }

    const addVotingOptionHandler = (event) => {
        event.preventDefault();

        client.addVotingOption(title, description, votingId, pubkey, privkey).then(() => {
            console.log('voting option added');
        });

        handleClose();
    }

    return (
        <div className="form-dialog__container">
            <Button variant="outlined" onClick={handleClickOpen}>
                Add New Candidate
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Candidate</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, enter all information about voting option:
                        title, description, public and private keys.
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
                        label="Public key"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={pubkeyChangeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Private key"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={privkeyChangeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addVotingOptionHandler}>Add candidate</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
