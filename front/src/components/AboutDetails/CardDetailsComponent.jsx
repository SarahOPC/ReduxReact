import styled from "styled-components";
import { PurpleBackground } from '../AboutBackground/BackgroundPurpleComponent';
import { TransactionDetail } from "./TransactionDetailComponent";

const AccountContainer = styled.div`
    background-color: #FFFFFF;
    padding: 1em;
    margin-bottom: 2em;
    border: 1px solid black;
    width: 17em;
    margin-top: 2em;

    @media (min-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

const AccountElement = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
`;

const AccountTitle = styled.div`
    font-size: 1.1em;
`;

const AccountAmount = styled.div`
    font-size: 2.5em;
    font-weight: 700;
`;

const AccountDescription = styled.div`
`;

const CardTitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CardTitleContainerWithBackground = styled.div`
    position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`;

const ContainerForDesktopStyles = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

function CardDetails() {
    return (
        <CardTitleContainerWithBackground>
            <CardTitleContainer>
                <AccountContainer>
                    <AccountElement>
                        <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
                        <AccountAmount>$2,082.79</AccountAmount>
                        <AccountDescription>Available Balance</AccountDescription>
                    </AccountElement>
                </AccountContainer>
            </CardTitleContainer>
            <ContainerForDesktopStyles>
                <TransactionDetail newAmount="$5.00" newBalance="$2082.79" />
                <TransactionDetail newAmount="$10.00" newBalance="$2087.79" />
                <TransactionDetail newAmount="$20.00" newBalance="$2097.79" />
                <TransactionDetail newAmount="$30.00" newBalance="$2117.79" />
                <TransactionDetail newAmount="$40.00" newBalance="$2147.79" />
                <TransactionDetail newAmount="$50.00" newBalance="$2187.79" />
            </ContainerForDesktopStyles>
            <BackgroundContainer>
                <PurpleBackground />
            </BackgroundContainer>
        </CardTitleContainerWithBackground>
    )
}

export { CardDetails };
