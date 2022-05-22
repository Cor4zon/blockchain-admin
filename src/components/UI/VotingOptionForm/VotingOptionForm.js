import React, { useState } from 'react';
import APIClient from "../../../services/APIClient";

import "./VotingOptionForm.css";

const VotingOption = ({ voting }) => {
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

    return (
        <>
            <form className="voting-option-form">
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
