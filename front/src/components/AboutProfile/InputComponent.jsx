import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { changeFirstName, changeLastName } from "../../reduxStore";
// useSelector allows to retrieve informations in Redux
// useDispatch allows to "talk" to Redux by saying "do this action"

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
    const userFirstName = useSelector((state) => state.user.userFirstName);
    const userLastName = useSelector((state) => state.user.userLastName);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSaveClick = () => {
        const newFirstName = document.getElementById('userFirstNameToEdit').value;
        const newLastName = document.getElementById('userLastNameToEdit').value;

        dispatch(changeFirstName(newFirstName));
        dispatch(changeLastName(newLastName));
        navigate('/profile');
    };

    const handleCancelClick = () => {
        navigate('/profile');
    }

    return (
        <InputContainer>
            <LeftBox>
            <input
                type="text"
                id="userFirstNameToEdit"
                name="userFirstNameToEdit"
                placeholder={userFirstName}></input>
            <ButtonsComponent
                type="submit"
                buttonContent="Save"
                onClick={handleSaveClick}
                customStyles={{
                    fontSize: "0.5em",
                    padding: "0.5em 1.5em",
                    maxWidth: "3em",
                    marginTop: "0.5em"
                }}
            />
            </LeftBox>
            <RightBox>
            <input
                type="text"
                id="userLastNameToEdit"
                name="userLastNameToEdit"
                placeholder={userLastName}></input>
            <ButtonsComponent
                type="button"
                buttonContent="Cancel"
                onClick={handleCancelClick}
                customStyles={{
                    fontSize: "0.5em",
                    padding: "0.5em 1.5em",
                    maxWidth: "5em",
                    marginTop: "0.5em"
                }}
            />
            </RightBox>
        </InputContainer>
    )
}

export { InputComponent };
