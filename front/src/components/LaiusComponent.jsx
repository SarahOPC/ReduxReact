import styled from "styled-components";

const LaiusContainer = styled.div`
    color: #2c3e50;
`;

const Slogan = styled.p`
    font-size: 1.5em;
    font-weight: 600;
`;

const MiniSlogan = styled.p`
`;

function LaiusComponent() {
    return (
        <LaiusContainer>
            <Slogan>
                No fees.
                No minimum deposit.
                High interest rates.
            </Slogan>
            <MiniSlogan>
                Open a savings account with Argent Bank today!
            </MiniSlogan>
        </LaiusContainer>
    )
}

export { LaiusComponent };
