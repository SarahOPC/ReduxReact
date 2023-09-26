import styled from "styled-components";
import { ButtonsComponent } from "./ButtonsComponent";
import { AccountComponent } from "./AccountComponent";

const WelcomeElement = styled.div`
    color: #FFFFFF;
    font-weight: 700;
    font-size: 2em;
    margin: 0.7em 0em;
`;

const Welcome = styled.div`
`;

const WelcomeName = styled.div`
`;

function ProfileComponent() {
    return (
        <div>
            <WelcomeElement>
                <Welcome>Welcome back</Welcome>
                <WelcomeName>Tony Jarvis!</WelcomeName>
            </WelcomeElement>
            <ButtonsComponent 
                type="button"
                buttonContent="Edit Name"
                customStyles={{
                    width: "fit-content",
                    padding: "0.7em",
                    borderColor: "#00BC77",
                    borderRightStyle: "outset",
                    borderBottomStyle: "outset",
                    fontSize: "0.8em",
                    marginBottom: "2em"
                }}
            />
            <AccountComponent>
            </AccountComponent>

        </div>
    )
}

export { ProfileComponent };
