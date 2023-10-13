import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfos, setUserInfo } from "../../reduxStore";
// useSelector allows to retrieve informations in Redux

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

const ProfileUserContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
`;

function ProfileComponent() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user.userFirstName || !user.userLastName) {
            // Only dispatch getUserInfos if user info is not already available
            if(token) {
                dispatch(getUserInfos({ token }))
                    .then((action) => {
                        const { userFirstName, userLastName } = action.payload;
                        dispatch(setUserInfo({userFirstName, userLastName}));
                    });
            }
        }
    }, [dispatch, token, user.userFirstName, user.userLastName]);

    return (
        <ProfileUserContainer>
            <WelcomeElement>
                <Welcome>Welcome back</Welcome>
                <WelcomeName>{user.userFirstName} {user.userLastName}</WelcomeName>
            </WelcomeElement>
            <ButtonsComponent 
                type="button"
                buttonContent="Edit Name"
                onClick={() => {
                    navigate('/editProfile');
                }}
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
        </ProfileUserContainer>
    )
}

export { ProfileComponent };
