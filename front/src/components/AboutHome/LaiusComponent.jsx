import styled from "styled-components";

const LaiusContainer = styled.div`
    color: #2c3e50;
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 1;
    background-color: #FFFFFF;
    padding: 1.5em 2em 3em 2em;
    width: 13em;
    height: 6em;
    margin: 1.5em 1.5em 1.5em 2.5em;
`;

const Slogan = styled.div`
    font-weight: 700;
`;

const MiniSlogan = styled.p`
`;

function LaiusComponent() {
    return (
        <LaiusContainer>
            <Slogan>
                No fees.
            </Slogan>
            <Slogan>
                No minimum deposit.
            </Slogan>
            <Slogan>
                High interest rates.
            </Slogan>
            <MiniSlogan>
                Open a savings account with Argent Bank today!
            </MiniSlogan>
        </LaiusContainer>
    )
}

export { LaiusComponent };
