import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuContainer = styled.div`
    color: #2C3E50;
    display: flex;
    align-items: baseline;
`;

const MenuItem = styled.div`
    font-weight: bold;
    text-decoration: none;
    margin-right: 1.5em;
`;

const IconContainer = styled.div`
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 0.5em;
`;

function MenuComponent() {
    return (
        <MenuContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faCircleUser} style={{color: '#2C3E50', }} />
            </IconContainer>
            <MenuItem>Sign In</MenuItem>
        </MenuContainer>
    )
}

export { MenuComponent };
