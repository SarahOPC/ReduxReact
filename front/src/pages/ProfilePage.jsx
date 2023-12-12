import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { PurpleBackground } from "../components/AboutBackground/BackgroundPurpleComponent";
import { ProfileComponent } from "../components/AboutProfile/ProfileComponent";
import { useDispatch } from "react-redux";
import { clearAuthentication } from "../reduxStore";
import { AccountComponent } from "../components/AboutProfile/AccountComponent";

const ProfilePageContainer = styled.div`
    position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`;

const ProfileComponentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const AccountContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;

function ProfilePage() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(clearAuthentication())
    };

    return (
        <ProfilePageContainer>
            <HeaderComponent
                onClick={handleSignOut}
                to="/"
            />
            <BackgroundContainer>
                <PurpleBackground customheight="61em" />
            </BackgroundContainer>
            <ProfileComponentContainer>
                <ProfileComponent />
            </ProfileComponentContainer>
            <AccountContainer>
                <AccountComponent />
            </AccountContainer>
            <FooterComponent />
        </ProfilePageContainer>
    )
}

export { ProfilePage };
