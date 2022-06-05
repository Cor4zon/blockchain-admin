import React, {useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import APIClient from "../../../services/APIClient";
import "./VoterForm.css";

const VoterForm = () => {
    const [ votingsList, setVotingList ] = useState([]);
    const [ pubkey, setPubkey ] = useState("");
    const [ voting, setVoting ] = useState("");
    const client = new APIClient();

    const pubkeyChangeHandler = (event) => {
        setPubkey(event.target.value);
    }

    const addVoterHandler = (event) => {
        event.preventDefault();
        client.addVoter(pubkey, voting).then(() => {
            console.log(`pubkey: ${pubkey}, voting: ${voting}`);
            console.log('voter added');

        });
        setPubkey("");
        setVoting("");

    }

    useEffect(() => {
        const votingsList = [];

        client.fetchVotings().then((result) => {
            for (let voting of result.data) {
                votingsList.push([voting.title, voting.id]);
            }

            setVotingList([...votingsList]);
        })
    }, []);

    const selectVotingHandler = (event) => {
        setVoting(event.target.value);
    }

    return (
        <>

            <form className="voter-form">
                <FormControl fullWidth>
                    <InputLabel id="select-label">Voting</InputLabel>
                    <Select
                        id="selected-voting"
                        value={voting}
                        label="Voting"
                        onChange={selectVotingHandler}
                    >
                        {
                            votingsList.map((item, index) => {
                                return <MenuItem key={index} value={item[1]}> { item[0] } </MenuItem>;
                            })
                        }
                    </Select>
                </FormControl>

                <label>
                    <input type="text" value={pubkey} name="name" onChange={ pubkeyChangeHandler } placeholder="Voter public key"/>
                </label>
                <input id="submit" type="submit" value="Add Voter" onClick={ addVoterHandler }/>

            </form>
        </>
    );
};

export default VoterForm;
