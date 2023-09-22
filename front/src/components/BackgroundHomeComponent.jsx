import bankTree from '../assets/bank-tree.jpeg';
import { LaiusComponent } from './LaiusComponent';
import styled from 'styled-components';

const BankTreeImage = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: 300px;
    margin-top: -50px;
    z-index: -1;
`;

function BackgroundHomeComponent() {
    return (
        <div>
            <BankTreeImage src={bankTree} alt='Small plant with coins on the roots' />
            <LaiusComponent />
        </div>
    )
}

export { BackgroundHomeComponent };
