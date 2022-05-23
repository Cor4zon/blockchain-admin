import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import VotingCard from "../VotingCard/VotingCard";
import APIClient from "../../services/APIClient";
import VoterFormDialog from "../VoterFormDialog/VoterFormDialog";
import VotingOptionFormDialog from "../VotingOptionFormDialog/VotingOptionFormDialog";

const VotingInfo = () => {
    let params = useParams();
    const [ voting, setVoting ] = useState({});

    const client = new APIClient();

    useEffect(() => {
        client.fetchVotings().then((result) => {
            const votings = result.data;
            const voting = votings.filter(item => item.id === +params.voting_id);
            setVoting(voting[0])
        });
    }, []);

    return (
        <div>
            <VotingCard voting={voting} />

            <p>Добавить кандидата</p>
            <VotingOptionFormDialog votingId={voting.id} />

            <p>Добавить избирателя</p>
            <VoterFormDialog votingId={voting.id} />

        </div>
    );
};

export default VotingInfo;
