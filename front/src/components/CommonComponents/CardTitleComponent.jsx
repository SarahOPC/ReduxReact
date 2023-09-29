import styled from "styled-components";
import { PurpleBackground } from '../AboutBackground/BackgroundPurpleComponent';

const AccountContainer = styled.div`
    background-color: #FFFFFF;
    padding: 1em;
    margin-bottom: 2em;
    border: 1px solid black;
    width: 17em;
    margin-top: 2em;
`;

const AccountElement = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

function CardTitle() {
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
            <BackgroundContainer>
                <PurpleBackground />
            </BackgroundContainer>
        </CardTitleContainerWithBackground>
    )
}

export { CardTitle };
