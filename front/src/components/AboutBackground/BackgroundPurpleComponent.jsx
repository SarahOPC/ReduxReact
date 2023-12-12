import styled from "styled-components";

const PurpleContainer = styled.div.attrs(props => ({
    // $customheight to solve warning on unknown props
    $customheight: props.$customheight 
  }))`
    background-color: #12002b;
    min-height: ${(props) => props.$customheight};
    z-index: -1;
`;

function PurpleBackground({ customheight }) {
    return (
        <PurpleContainer $customheight={customheight} />
    )
}

export { PurpleBackground };
