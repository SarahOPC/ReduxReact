import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { AccountComponent } from "./AccountComponent";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
// useSelector allows to retrieve informations in Redux

const WelcomeElement = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2em;
    margin: 0.7em 0em;
`;

const Welcome = styled.div`
`;

const WelcomeName = styled.div`
`;

const ProfileUserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;

function ProfileComponent() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    return (
        <ProfileUserContainer>
            <WelcomeElement>
                <Welcome>Welcome back</Welcome>
                <WelcomeName>{user.userFirstName} {user.userLastName}</WelcomeName>
            </WelcomeElement>
            <ButtonsComponent 
                type="button"
                buttonContent="Edit Name"
                onClick={() => {
                    navigate('/editProfile');
                }}
                customStyles={{
                    width: "fit-content",
                    padding: "0.7em",
                    borderColor: "#00BC77",
                    borderRightStyle: "outset",
                    borderBottomStyle: "outset",
                    fontSize: "0.8em",
                    marginBottom: "2em"
                }}
            />
            <AccountComponent>
            </AccountComponent>

        </ProfileUserContainer>
    )
}

export { ProfileComponent };
