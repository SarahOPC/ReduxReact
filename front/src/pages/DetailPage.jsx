import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { PurpleBackground } from "../components/AboutBackground/BackgroundPurpleComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { CardDetails } from "../components/AboutDetails/CardDetailsComponent";
import { useDispatch } from "react-redux";
import { clearAuthentication } from "../reduxStore";

const DetailPageContainer = styled.div`
    position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`;


function DetailPage() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        dispatch(clearAuthentication())
    };

    return (
        <DetailPageContainer>
            <HeaderComponent
                onClick={handleSignOut}
                to="/"
            />
            <BackgroundContainer>
                <PurpleBackground customHeight="110em" />
            </BackgroundContainer>
            <CardDetails />
            <FooterComponent />
        </DetailPageContainer>
    )
}

export { DetailPage };
