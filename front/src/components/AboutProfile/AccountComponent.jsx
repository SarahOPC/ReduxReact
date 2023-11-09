import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { useNavigate } from "react-router";

const AccountContainer = styled.div`
    background-color: #FFFFFF;
    padding: 1em;
    margin-bottom: 2em;
    border: 1px solid black;
    width: 17em;

    @media (min-width: 768px) {
        width: 75em;
        display: flex;
        justify-content: space-between;
    }
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

const ContainerForDesktopStyles = styled.div`
    @media (min-width: 768px) {
        width: 13em;
        height: fit-content;
        align-self: center;
    }
`;

function AccountComponent() {
    const navigate = useNavigate();
    return (
        <AccountItems>
            <AccountContainer>
                <AccountElement>
                    <AccountTitle>Argent Bank Checking (x8349)</AccountTitle>
                    <AccountAmount>$2,082.79</AccountAmount>
                    <AccountDescription>Available Balance</AccountDescription>
                </AccountElement>
                <ContainerForDesktopStyles>
                    <ButtonsComponent
                        type="button"
                        buttonContent="View transactions"
                        onClick={() => {
                            navigate('/details');
                        }}
                        customStyles={{
                            fontSize: "1.1em",
                            borderRightStyle: "outset",
                            borderBottomStyle: "outset",
                            borderColor: "#B3B3B3"
                        }}
                    />
                </ContainerForDesktopStyles>
            </AccountContainer>
            <AccountContainer>
                <AccountElement>
                    <AccountTitle>Argent Bank Savings (x6712)</AccountTitle>
                    <AccountAmount>$10,928.42</AccountAmount>
                    <AccountDescription>Available Balance</AccountDescription>
                </AccountElement>
                <ContainerForDesktopStyles>
                    <ButtonsComponent
                        type="button"
                        buttonContent="View transactions"
                        customStyles={{
                            fontSize: "1.1em",
                            borderRightStyle: "outset",
                            borderBottomStyle: "outset",
                            borderColor: "#B3B3B3"
                        }}
                    />
                </ContainerForDesktopStyles>
            </AccountContainer>
            <AccountContainer>
                <AccountElement>
                    <AccountTitle>Argent Bank Credit Card (x8349)</AccountTitle>
                    <AccountAmount>$184.30</AccountAmount>
                    <AccountDescription>Current Balance</AccountDescription>
                </AccountElement>
                <ContainerForDesktopStyles>
                    <ButtonsComponent
                        type="button"
                        buttonContent="View transactions"
                        customStyles={{
                            fontSize: "1.1em",
                            borderRightStyle: "outset",
                            borderBottomStyle: "outset",
                            borderColor: "#B3B3B3"
                        }}
                    />
                </ContainerForDesktopStyles>
            </AccountContainer>
        </AccountItems>
    )
}

export { AccountComponent };
