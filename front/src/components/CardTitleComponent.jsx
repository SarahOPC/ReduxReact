import styled from "styled-components";
import { AccountComponent } from "./AccountComponent";

const CardTitleContainer = styled.div`
`;

function CardTitle() {
    return (
        <CardTitleContainer>
            <AccountComponent />
        </CardTitleContainer>
    )
}

export { CardTitle };
