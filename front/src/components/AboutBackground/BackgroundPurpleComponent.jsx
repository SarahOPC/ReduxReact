import styled from "styled-components";

const PurpleContainer = styled.div`
    background-color: #12002b;
    height: 141em;
    z-index: -1;
`;

function PurpleBackground() {
    return (
        <PurpleContainer />
    )
}

export { PurpleBackground };
