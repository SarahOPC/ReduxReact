import bankTree from '../assets/bank-tree.jpeg';
import { LaiusComponent } from './LaiusComponent';
import styled from 'styled-components';

const BankTreeImage = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 300px;
    margin-top: -50px;
    z-index: 0;
`;

const BackgroundHomeComponentContainer = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 3.7em;
`;

function BackgroundHomeComponent() {
    return (
        <BackgroundHomeComponentContainer>
            <BankTreeImage src={bankTree} alt='Small plant with coins on the roots' />
            <LaiusComponent />
        </BackgroundHomeComponentContainer>
    )
}

export { BackgroundHomeComponent };
