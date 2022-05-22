import React, { useState } from 'react';
import APIClient from "../../../services/APIClient";

import "./VotingForm.css";

const VotingForm = () => {
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ deadline, setDeadline ] = useState("");

    const client = new APIClient();

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
    }

    return (
        <div className="voting-form__container">
            <form className="voting-form">
                <label>
                    <input type="text" name="name" onChange={ titleChangeHandler } placeholder="Title"/>
                </label>
                <label>
                    <input type="text" name="name" onChange={ descriptionChangeHandler } placeholder="Desription"/>
                </label>
                <label>
                    <input type="date" name="name"  onChange={ deadlineChangeHandler } placeholder="Deadline"/>
                </label>
                <input id="submit" type="submit" value="Add Voting" onClick={ addVotingHandler }/>
            </form>
        </div>
    );
};

export default VotingForm;
