import styled from 'styled-components';
import Logo from '../../assets/argentBankLogo.png';

const LogoImage = styled.img`
    max-width: 100%;
    width: 200px;
`;

function LogoComponent() {
    return (
        <LogoImage src={Logo} alt="ArgentBank Logo" />
    )
}

export { LogoComponent };
