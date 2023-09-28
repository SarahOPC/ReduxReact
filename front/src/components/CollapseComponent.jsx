import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const CollapseContainer = styled.div`
`;

function CollapseComponent() {
    return (
        <CollapseContainer>
            <FontAwesomeIcon icon={faChevronUp} style={{color: '#2C3E50', }} />
            <FontAwesomeIcon icon={faChevronDown} style={{color: '#2C3E50', }} />
        </CollapseContainer>
    )
}

export { CollapseComponent };
