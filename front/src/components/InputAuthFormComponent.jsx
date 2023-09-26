import styled from "styled-components";
import { ButtonsComponent } from "./ButtonsComponent";

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
                    customStyles={{
                        textDecoration: "underline"
                    }}
                />
            </form>
        </InputAuthFormContainer>
    )
}

export { InputAuthFormComponent };
