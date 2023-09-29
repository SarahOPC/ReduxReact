import styled from "styled-components";
import { InputAuthFormComponent } from './InputAuthFormComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em;
`;

const IconContainer = styled.div`
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 0.5em;
`;

const SignInTitle = styled.p`
    font-size: 1.5em;
    font-weight: 700;
`;

function SignInComponent() {
    return (
        <SignInContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faCircleUser} style={{color: '#2C3E50', }} />
            </IconContainer>
            <SignInTitle>Sign In</SignInTitle>
            <InputAuthFormComponent />
        </SignInContainer>
    )
}

export { SignInComponent };
