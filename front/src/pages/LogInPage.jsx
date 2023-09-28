import styled from "styled-components";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import { PurpleBackground } from "../components/BackgroundPurpleComponent";
import { SignInComponent } from "../components/SignInComponent";

const LogInPageContainer = styled.div`
    position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`;

const SignInComponentContainer = styled.div`
    background-color: #FFFFFF;
    width: 75%;
    margin: 3em 0em 18em 3.5em;
`;

function LogInPage() {
    return (
        <LogInPageContainer>
            <HeaderComponent menuContent="Sign In" />
            <BackgroundContainer>
                <PurpleBackground />
            </BackgroundContainer>
            <SignInComponentContainer>
                <SignInComponent />
            </SignInComponentContainer>
            <FooterComponent />
        </LogInPageContainer>
    )
}

export { LogInPage };
