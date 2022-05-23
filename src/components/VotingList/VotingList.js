import React, { useState, useEffect } from 'react';

import APIClient from "../../services/APIClient";
import VotingCard from '../VotingCard/VotingCard'

import './VotingList.css';
import VotingFormDialog from "../VotingFormDialog/VotingFormDialog";

const VotingList = () => {
    const [ votings, setVotings ] = useState([]);
    const client = new APIClient();

    useEffect(() => {
        client.fetchVotings().then((result) => {
            setVotings(result.data)
        });
    }, []);

    return (
        <div>
            { votings.map(voting => {
                return <VotingCard key={voting.id} voting={voting} />
            }) }

            <VotingFormDialog />
        </div>
    );
};

export default VotingList;
