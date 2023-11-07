import styled from "styled-components";

const PurpleContainer = styled.div`
    background-color: #12002b;
    height: ${(props) => props.customHeight || '141em'};
    z-index: -1;
`;

function PurpleBackground({ customHeight}) {
    return (
        <PurpleContainer customHeight={customHeight} />
    )
}

export { PurpleBackground };
