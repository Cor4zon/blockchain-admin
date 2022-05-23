import React, { useState, useEffect } from 'react';

import APIClient from "../../services/APIClient";
import VotingCard from './VotingCard/VotingCard'
import VotingForm from "../UI/VotingForm/VotingForm";
import './FormDialog/FormDialog';

import './VotingList.css';
import FormDialog from "./FormDialog/FormDialog";

const VotingList = () => {
    const [ votings, setVotings ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotings().then((result) => {
            setVotings(result.data)
        });
    }, [votings]);

    return (
        <div>
            { votings.map(voting => {
                return <VotingCard key={voting.id} voting={voting} />
            }) }

            <FormDialog />
            <button onClick="displayVotingForm" className="border-black txt-white bkgnd-black border-radius-5px no-shadow hover-white" id="add-btn">Add Voting</button>
            {/*<VotingForm />*/}
        </div>
    );
};

export default VotingList;
