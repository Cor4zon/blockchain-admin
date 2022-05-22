import React from 'react';
import ActionCard from '../ActionCard/ActionCard';
import { Link } from "react-router-dom";

import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="content">
            <Link to="voting" className="action-link add-voting">
                <ActionCard text={"Создать голосование"} />
            </Link>
            <Link to="voter" className="action-link add-option">
                <ActionCard text={"Добавить кандидатов"} />
            </Link>
            <Link to="voting_option" className="action-link add-voter">
                <ActionCard text={"Добавить голосующих"} />
            </Link>
        </div>
    );
};

export default MainContent;
