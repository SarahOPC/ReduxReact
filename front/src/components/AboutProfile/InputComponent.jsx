import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfos, setUserInfo, changeUserInfos } from "../../reduxStore";

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
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!userFirstName || !userLastName) {
            // Only dispatch getUserInfos if user info is not already available
            if(token) {
                dispatch(getUserInfos({ token }))
                    .then((action) => {
                        const { userFirstName, userLastName } = action.payload;
                        dispatch(setUserInfo({userFirstName, userLastName}));
                    });
            }
        }
    }, [dispatch, token, userFirstName, userLastName]);

    
    const handleSaveClick = async () => {
        const newFirstName = document.getElementById('userFirstNameToEdit').value;
        const newLastName = document.getElementById('userLastNameToEdit').value;

        if(token && newFirstName && newLastName) {
            await dispatch(getUserInfos({ token }))
            .then(() => {
                    dispatch(changeUserInfos({ token, newFirstName, newLastName }))
                        .then(() => {
                            navigate('/profile');
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
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
