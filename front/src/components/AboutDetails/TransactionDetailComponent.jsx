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

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
`;

const Date = styled.p`
    text-align: center;
    
    @media (min-width: 768px) {
        order: 2;
        margin-left: 2em;
    }
`;

const Description = styled.p`
    text-align: center;
    order: 1;

    @media (min-width: 768px) {
        order: 3;
    }
`;

const Amount = styled.p`
    @media (min-width: 768px) {
        order: 4;
    }
`;

const Balance = styled.p`
    @media (min-width: 768px) {
        order: 5;
    }
`;

const ContainerForDesktopStyles = styled.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: baseline;
        order: 3;
        flex-direction: column-reverse;
    }
`;

const ContainerForChebronAndDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        display: flex;
        align-items: baseline;
    }
`;

function TransactionDetail({ newAmount, newBalance }) {
    const [isCollapseOpen, setisCollapseOpen] = useState(false);

    const toggleCollapse = () => {
        setisCollapseOpen(!isCollapseOpen);
    };

    return(
        <TransactionContainer>
            <ContainerForChebronAndDate>
                <FontAwesomeIcon icon={isCollapseOpen ? faChevronUp : faChevronDown} style={{color: '#2C3E50'}} onClick={toggleCollapse} />
                <ContainerForDesktopStyles>
                    <Date>June 20th, 2020</Date>
                    {isCollapseOpen && (
                        <CollapseComponent></CollapseComponent>
                        )}
                </ContainerForDesktopStyles>
            </ContainerForChebronAndDate>
            
            <Description>Golden Sun Bakery</Description>
            <Amount>{newAmount}</Amount>
            <Balance>{newBalance}</Balance>
        </TransactionContainer>
    )
}

export { TransactionDetail };
