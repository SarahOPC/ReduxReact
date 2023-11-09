import styled from "styled-components";

const Button = styled.div`
    background-color: #00bc77;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    padding: 0.5em 0em;
    font-size: 1.2em;
`;

function ButtonsComponent( { type, buttonContent, customStyles, onClick }) {
    const buttonType = type === 'submit' ? 'submit' : 'button';
    const buttonStyles = {...Button.defaultProps, ...customStyles};
    // buttonStyles is an object merging default Styles of Button component with customStyles
    //... is used to combine the two objects (spread operator)
    // defaultProps is used to authorized changing the default properties as needed in other components
    const handleClick = () => {
        if(onClick) {
            onClick(); // Will call the onClick function if it is provided in the code
        }
    }
    return (
        <Button type={buttonType} style={buttonStyles} onClick={handleClick}>
            {buttonContent}
        </Button>
    )
};

ButtonsComponent.defaultProps = {
    customStyles: {},
    // Setting a default value for customStyles prop of ButtonsComponent, so if no customStyle prop provided in other components =
    // the component will use the default styles without causing an error for customStyle being empty
};

export { ButtonsComponent };
