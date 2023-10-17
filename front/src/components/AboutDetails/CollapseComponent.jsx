import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";
import { SelectDropdown } from './SelectDropdownComponent';
import { useState } from 'react';
import { InputComponent } from './InputComponent';

const CollapseContainer = styled.div`
`;

const TransactionType = styled.div`
`;

const CategoryText = styled.div`
`;

const CategoryContainer = styled.div`
`;

const NotesContainer = styled.div`
`;

function CollapseComponent() {
    const [selectedCategory, setSelectedCategory] = useState('Food');
    const [isSelectDropdownOpen, setIsSelectDropdownOpen] = useState(false);
    const [notes, setNotes] = useState('');
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    const handleCategoryChange = (newCategory) => {
        setSelectedCategory(newCategory);
        setIsSelectDropdownOpen(false);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }

    const handleNotesSubmit = (event) => {
        setIsNotesOpen(false);
    }

    return (
        <CollapseContainer>
            <FontAwesomeIcon icon={faChevronUp} style={{color: '#2C3E50'}} />
            <FontAwesomeIcon icon={faChevronDown} style={{color: '#2C3E50'}} />
            <TransactionType>Transaction Type: Electronic</TransactionType>
            <CategoryContainer onClick={() => setIsSelectDropdownOpen(true)}>
                <CategoryText>Category: {selectedCategory}</CategoryText>
                <FontAwesomeIcon icon={faPencil} style={{color: "#47515F"}} />
            </CategoryContainer>
            {isSelectDropdownOpen ? (
                <SelectDropdown selectedValue={selectedCategory} onChange={handleCategoryChange} />
            ) : null}
            <NotesContainer>
                {isNotesOpen ? (
                    <InputComponent value={notes} onChange={handleNotesChange} onSubmit={handleNotesSubmit} />
                    ) : (
                        <div>Notes: {notes}</div>
                    )}
                    <FontAwesomeIcon icon={faPencil} style={{color: "#47515F"}} onClick={() => setIsNotesOpen(true)} />
            </NotesContainer>
        </CollapseContainer>
    )
}

export { CollapseComponent };
