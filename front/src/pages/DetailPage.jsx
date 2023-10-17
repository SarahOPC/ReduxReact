import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { CardDetails } from "../components/AboutDetails/CardDetailsComponent";
import { useDispatch } from "react-redux";
import { clearAuthentication } from "../reduxStore";

const DetailPageContainer = styled.div`
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
            <CardDetails />
            <FooterComponent />
        </DetailPageContainer>
    )
}

export { DetailPage };
