import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { CardDetails } from "../components/AboutDetails/CardDetailsComponent";

const DetailPageContainer = styled.div`
`;

function DetailPage() {
    return (
        <DetailPageContainer>
            <HeaderComponent />
            <CardDetails />
            <FooterComponent />
        </DetailPageContainer>
    )
}

export { DetailPage };
