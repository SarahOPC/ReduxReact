import styled from "styled-components";
import { ButtonsComponent } from "./ButtonsComponent";

const AccountTitle = styled.p`
`;

const AccountAmount = styled.p`
`;

const AccountDescription = styled.p`
`;

function AccountComponent() {
    return (
        <div>
            <AccountTitle>
            </AccountTitle>
            <AccountAmount>
            </AccountAmount>
            <AccountDescription>
            </AccountDescription>
            <ButtonsComponent
                type="button"
                buttonContent="View transactions"
                customStyles={{
                    fontSize: "1em",
                    borderRightStyle: "outset",
                    borderBottomStyle: "outset",
                    borderColor: "#80808"
                }}
            />
        </div>
    )
}

export { AccountComponent };
