import styled from "styled-components";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { CardTitle } from "../components/CommonComponents/CardTitleComponent";
import { CardDetails } from "../components/AboutDetails/CardDetailsComponent";

const DetailPageContainer = styled.div`
`;

function DetailPage() {
    return (
        <DetailPageContainer>
            <HeaderComponent />
            <CardTitle />
            <CardDetails />
            <FooterComponent />
        </DetailPageContainer>
    )
}

export { DetailPage };
