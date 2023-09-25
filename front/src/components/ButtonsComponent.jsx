import styled from "styled-components";

const Button = styled.div`
    background-color: #00bc77;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 700;
    text-align: center;
    padding: 0.5em 0em;
    font-size: 1.2em;
`;

function ButtonsComponent( { type, buttonContent }) {
    const buttonType = type === 'submit' ? 'submit' : 'button';

    return (
        <Button type={buttonType}>{buttonContent}</Button>
    )
};

export { ButtonsComponent };
