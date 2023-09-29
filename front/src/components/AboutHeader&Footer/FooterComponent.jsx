import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    border-top: solid #CCCCCC 0.15em;
    background-color: #FFFFFF;
    position: fixed;
    width: 100%;
    bottom: 0;

    p {
        padding-top: 0.7em;
        padding-bottom: 0.7em;
    }
`;

function FooterComponent() {
    return (
        <FooterContainer>
            <p>Copyright 2020 Argent Bank</p>
        </FooterContainer>
    )
}

export { FooterComponent };
