import styled from "styled-components";
import { TransactionDetail } from "./TransactionDetailComponent";

const CardDetailsContainer = styled.div`
`;

function CardDetails() {
    return (
        <CardDetailsContainer>
            <TransactionDetail />
        </CardDetailsContainer>
    )
}

export { CardDetails };
