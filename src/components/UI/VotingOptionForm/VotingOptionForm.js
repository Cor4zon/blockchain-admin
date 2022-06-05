import React, { useState, useEffect } from 'react';
import APIClient from "../../../services/APIClient";

import "./VotingOptionForm.css";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const VotingOption = () => {
    const [ voting, setVoting ] = useState("");
    const [ votingsList, setVotingList ] = useState([]);
    const [ pubkey, setPubkey ] = useState("");
    const [ privkey, setPrivkey ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");

    const client = new APIClient();

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

        client.addVotingOption(title, description, voting, pubkey, privkey).then(() => {
            console.log('voting option added');
        });
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
            <form className="voting-option-form">
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
                    <input type="text" name="name" onChange={ titleChangeHandler } placeholder="Title" />
                </label>
                <label>
                    <input type="text" name="name" onChange={ descriptionChangeHandler } placeholder="Description" />
                </label>
                <label>
                    <input type="text" name="name" onChange={ pubkeyChangeHandler } placeholder="Candidate public key" />
                </label>
                <label>
                    <input type="text" name="name" onChange={ privkeyChangeHandler } placeholder="Candidate private key" />
                </label>

                <input id="submit" type="submit" value="Add Candidate" onClick={ addVotingOptionHandler }/>
            </form>
        </>
    );
};

export default VotingOption;
