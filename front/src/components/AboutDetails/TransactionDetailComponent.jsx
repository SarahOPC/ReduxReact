import styled from "styled-components";
import { CollapseComponent } from "./CollapseComponent";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    margin: 1em;
    font-weight: bold;
`;

const Date = styled.p`
`;

const Description = styled.p`
`;

const Amount = styled.p`
`;

const Balance = styled.p`
`;

function TransactionDetail({ newAmount, newBalance }) {
    const [isCollapseOpen, setisCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        setisCollapseOpen(!isCollapseOpen);
    };

    return(
        <TransactionContainer>
            <Date>June 20th, 2020</Date>
            <FontAwesomeIcon icon={isCollapseOpen ? faChevronUp : faChevronDown} style={{color: '#2C3E50'}} onClick={toggleCollapse} />
            {isCollapseOpen && (
                <CollapseComponent></CollapseComponent>
            )}
            <Description>Golden Sun Bakery</Description>
            <Amount>{newAmount}</Amount>
            <Balance>{newBalance}</Balance>
        </TransactionContainer>
    )
}

export { TransactionDetail };
