import React, { useState } from 'react';
import APIClient from "../../../services/APIClient";

import "./VoterForm.css";

const VoterForm = ({ voting }) => {
    const [ pubkey, setPubkey ] = useState("");
    const client = new APIClient();

    const pubkeyChangeHandler = (event) => {
        setPubkey(event.target.value);
    }

    const addVoterHandler = (event) => {
        event.preventDefault();
        client.addVoter(pubkey, voting).then(() => {
            console.log('voter added');
        });
    }

    return (
        <>
            <form className="voter-form">
                <label>
                    <input type="text" name="name" onChange={ pubkeyChangeHandler } placeholder="Voter public key"/>
                </label>
                <input id="submit" type="submit" value="Add Voter" onClick={ addVoterHandler }/>
            </form>
        </>
    );
};

export default VoterForm;
