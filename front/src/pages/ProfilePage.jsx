import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { PurpleBackground } from "../components/BackgroundPurpleComponent";
import { ProfileComponent } from "../components/ProfileComponent";

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

function ProfilePage() {
    return (
        <ProfilePageContainer>
            <HeaderComponent />
            <BackgroundContainer>
                <PurpleBackground />
            </BackgroundContainer>
            <ProfileComponentContainer>
                <ProfileComponent />
            </ProfileComponentContainer>
            <FooterComponent />
        </ProfilePageContainer>
    )
}

export { ProfilePage };
