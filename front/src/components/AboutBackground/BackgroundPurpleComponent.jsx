import styled from "styled-components";

const PurpleContainer = styled.div`
    background-color: #12002b;
    min-height: ${(props) => props.customHeight};
    z-index: -1;
`;

function PurpleBackground({ customHeight}) {
    return (
        <PurpleContainer customHeight={customHeight} />
    )
}

export { PurpleBackground };
