import styled from "styled-components";
import { ButtonsComponent } from "./ButtonsComponent";

const AccountContainer = styled.div`
    background-color: #FFFFFF;
    padding: 1em;
    margin-bottom: 2em;
    border: 1px solid black;
    width: 17em;
`;

const AccountElement = styled.div`
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AccountTitle = styled.div`
    font-size: 1.1em;
`;

const AccountAmount = styled.div`
    font-size: 2.5em;
    font-weight: 700;
`;

const AccountDescription = styled.div`
`;

const AccountItems = styled.div`
`;

function AccountComponent() {
    return (
        <AccountItems>
            <AccountContainer>
                <AccountElement>
                    <AccountTitle>Title</AccountTitle>
                    <AccountAmount>$2025.79</AccountAmount>
                    <AccountDescription>Available Balance</AccountDescription>
                </AccountElement>
                <ButtonsComponent
                    type="button"
                    buttonContent="View transactions"
                    customStyles={{
                        fontSize: "1em",
                        borderRightStyle: "outset",
                        borderBottomStyle: "outset",
                        borderColor: "#B3B3B3"
                    }}
                />
            </AccountContainer>
        </AccountItems>
    )
}

export { AccountComponent };
