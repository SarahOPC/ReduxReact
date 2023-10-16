import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const CollapseContainer = styled.div`
`;

const TransactionType = styled.div`
`;

const Category = styled.div`
`;

const Notes = styled.div`
`;

function CollapseComponent() {
    return (
        <CollapseContainer>
            <FontAwesomeIcon icon={faChevronUp} style={{color: '#2C3E50', }} />
            <FontAwesomeIcon icon={faChevronDown} style={{color: '#2C3E50', }} />
            <TransactionType>Transaction Type: Electronic</TransactionType>
            <Category>Food</Category>
            <FontAwesomeIcon icon={faPencil} style={{color: "#47515F",}} />
            <Notes>Truc</Notes>
            <FontAwesomeIcon icon={faPencil} style={{color: "#47515F",}} />
        </CollapseContainer>
    )
}

export { CollapseComponent };
