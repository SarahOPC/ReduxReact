import styled from "styled-components";
import { CollapseComponent } from "./CollapseComponent";

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
    return(
        <TransactionContainer>
            <Date>June 20th, 2020</Date>
            <Description>Golden Sun Bakery</Description>
            <Amount>{newAmount}</Amount>
            <Balance>{newBalance}</Balance>
            <CollapseComponent></CollapseComponent>
        </TransactionContainer>
    )
}

export { TransactionDetail };
