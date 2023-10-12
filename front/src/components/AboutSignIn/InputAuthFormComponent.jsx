import styled from "styled-components";
import { ButtonsComponent } from "../CommonComponents/ButtonsComponent";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfos, postAuth } from "../../reduxStore";
import { useEffect } from "react";

const InputAuthFormContainer = styled.div`
    width: 95%;

    label[for="username"],
    label[for="password"] {
        font-weight: 700;
    }

    #RememberMe {
        margin-bottom: 1.3em;
    }
`;

const Input = styled.input`
    height: 2em;
    margin-bottom: 1.3em;
    width: 90%;
`;

function InputAuthFormComponent () {
    const navigate = useNavigate(); // Hook that allows to navigate between pages
    let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const authenticationStatus = useSelector((state) => state.auth.authenticationStatus);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    console.log(isAuthenticated);
    
    const handleSignIn = async () => {
        try {
            const email = document.getElementById("Username").value;
            const password = document.getElementById("Password").value;
            await dispatch(postAuth({ email, password }));

        } catch (error) {
            console.error("Authentication error: ", error)
        }
    }

    // To check the changes of states in authentication
    useEffect(() => {
        if(authenticationStatus === "success") {
            if(token) {
                dispatch(getUserInfos({ token }));
            }
            navigate('/profile');
        } else if(authenticationStatus === "failed") {
            alert('An error has occurred during the process and authentication failed. Please try again');
        }
    }, [authenticationStatus, navigate, dispatch, token]);

    return (
        <InputAuthFormContainer>
            <form>
                <label htmlFor="username">Username</label><br></br>
                <Input type="text" name="Username" id="Username" required /><br></br>
                <label htmlFor="password">Password</label><br></br>
                <Input type="password" name="Password"id="Password" required /><br></br>
                <label htmlFor="rememberMe">
                    <input type="checkbox" name="remember" id="RememberMe"/> Remember me
                </label><br></br>
                <ButtonsComponent
                    type="submit"
                    buttonContent="Sign In"
                    onClick={handleSignIn}
                    customStyles={{
                        textDecoration: "underline"
                    }}
                />
            </form>
        </InputAuthFormContainer>
    )
}

export { InputAuthFormComponent };
