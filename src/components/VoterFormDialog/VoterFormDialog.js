import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import APIClient from "../../services/APIClient";


export default function VoterFormDialog({ votingId }) {
    const [open, setOpen] = React.useState(false);
    const [ voterPublicKey, setVoterPublicKey ] = React.useState("");
    const client = new APIClient();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const voterPubkeyChangeHandler = (event) => {
        setVoterPublicKey(event.target.value);
    }

    const addVoterHandler = (event) => {
        event.preventDefault();

        client.addVoter(voterPublicKey, votingId).then(() => {
            console.log('voter added');
        });

        handleClose();
    }

    return (
        <div className="form-dialog__container">
            <Button variant="outlined" onClick={handleClickOpen}>
                New Voter
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Voter</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please, enter voter public key
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="voter-pubkey"
                        label="Voter Public key"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={voterPubkeyChangeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addVoterHandler}>Add voting</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
