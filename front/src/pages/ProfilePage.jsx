import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { PurpleBackground } from "../components/AboutBackground/BackgroundPurpleComponent";
// import { EditProfileComponent } from "../components/AboutProfile/EditProfile";
import { ProfileComponent } from "../components/AboutProfile/ProfileComponent";

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
            <HeaderComponent menuContent="Sign Out" to="/" />
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
            /* return (
                <ProfilePageContainer>
                    <HeaderComponent menuContent="Sign Out" to="/" />
                    <BackgroundContainer>
                        <PurpleBackground />
                    </BackgroundContainer>
                    <ProfileComponentContainer>
                        <EditProfileComponent />
                    </ProfileComponentContainer>
                    <FooterComponent />
                </ProfilePageContainer>
            ) */

export { ProfilePage };