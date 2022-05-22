import React from 'react';
import { Link } from "react-router-dom";

import './VotingCard.css';

const VotingCard = ({ voting }) => {

    return (
        <div className="voting-card">
            <Link to={`${voting.id}`} className="voting-card__link">
                <h3> { voting.title } </h3>
                <p className="voting-card__description"> { voting.description } </p>

                <i className="fa-solid fa-timer"></i>
                <p className="voting-card__deadline"> { voting.deadline } </p>

            </Link>
        </div>
    );
};

export default VotingCard;
