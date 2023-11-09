import bankTree from '../../assets/bank-tree.jpeg';
import { LaiusComponent } from '../AboutHome/LaiusComponent';
import styled from 'styled-components';

const BankTreeImage = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 300px;
    width: 390px;
    margin-top: -50px;
    z-index: 0;

    @media (min-width: 768px) {
        width: 85em;
        height: 50em;
        position: absolute;
        margin-top: 9%;
        left: 28%;
    }
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
