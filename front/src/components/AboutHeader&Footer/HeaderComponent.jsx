import styled from "styled-components";
import { LogoComponent } from "./LogoComponent";
import { MenuComponent } from "./MenuComponent";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: #FFFFFF;
    position: relative;
    z-index: 2;
`;

function HeaderComponent({ to, onClick }) {
    return (
        <HeaderContainer>
            <LogoComponent />
            <MenuComponent to={to} onClick={onClick} />
        </HeaderContainer>
    )
}

export { HeaderComponent };
