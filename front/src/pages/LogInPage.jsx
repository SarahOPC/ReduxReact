import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { PurpleBackground } from "../components/AboutBackground/BackgroundPurpleComponent";
import { SignInComponent } from "../components/AboutSignIn/SignInComponent";

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

const ContainerForDesktopStyles = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

function LogInPage() {
    return (
        <LogInPageContainer>
            <HeaderComponent />
            <ContainerForDesktopStyles>
                <BackgroundContainer>
                    <PurpleBackground customheight="51em"/>
                </BackgroundContainer>
                <SignInComponentContainer>
                    <SignInComponent />
                </SignInComponentContainer>
            </ContainerForDesktopStyles>
            <FooterComponent />
        </LogInPageContainer>
    )
}

export { LogInPage };
