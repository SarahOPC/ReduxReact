import styled from "styled-components";
import { ButtonsComponent } from "./ButtonsComponent";

const InputContainer = styled.div`
    display: flex;
    margin-top: 1em;
`;

const LeftBox = styled.div`
    margin-right: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input {
        max-width: 11em;
        padding: 0.3em 0em 0.3em 0.3em;
    }
`;

const RightBox = styled.div`
    margin-right: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0em;

    input {
        max-width: 11em;
        padding: 0.3em 0em 0.3em 0.3em;
    }
`;

function InputComponent({ userFirstNameToEdit, userLastNameToEdit }) {
    return (
        <InputContainer>
            <LeftBox>
            <input type="text" id="userFirstNameToEdit" name="userFirstNameToEdit" placeholder={userFirstNameToEdit}></input>
            <ButtonsComponent type="submit" buttonContent="Save" customStyles={{fontSize: "0.5em", padding: "0.5em 1.5em", maxWidth: "3em", marginTop: "0.5em"}} />
            </LeftBox>
            <RightBox>
            <input type="text" id="userLastNameToEdit" name="userLastNameToEdit" placeholder={userLastNameToEdit}></input>
            <ButtonsComponent type="button" buttonContent="Cancel" customStyles={{fontSize: "0.5em", padding: "0.5em 1.5em", maxWidth: "5em", marginTop: "0.5em"}} />
            </RightBox>
        </InputContainer>
    )
}

export { InputComponent };
