import styled from "styled-components";
import { CollapseComponent } from "../components/CollapseComponent";

const TransactionContainer = styled.div`
`;

const Date = styled.p`
`;

const Description = styled.p`
`;

const Amount = styled.p`
`;

const Balance = styled.p`
`;

function TransactionDetail() {
    return(
        <TransactionContainer>
            <Date></Date>
            <Description></Description>
            <Amount></Amount>
            <Balance></Balance>
            <CollapseComponent></CollapseComponent>
        </TransactionContainer>
    )
}

export { TransactionDetail };
