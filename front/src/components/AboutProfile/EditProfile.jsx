import styled from "styled-components";
import { AccountComponent } from "./AccountComponent";
import { InputComponent } from "./InputComponent";

const WelcomeElement = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2em;
    margin: 0.7em 0em;
`;

const Welcome = styled.div`
    display: flex;
    justify-content: center;
`;

const ProfileUserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;

function EditProfileComponent() {
    return (
        <ProfileUserContainer>
            <WelcomeElement>
                <Welcome>Welcome back</Welcome>
                <InputComponent />
            </WelcomeElement>
            <AccountComponent>
            </AccountComponent>
        </ProfileUserContainer>
    )
}

export { EditProfileComponent };
