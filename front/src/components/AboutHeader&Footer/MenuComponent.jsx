import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getUserInfos, setUserInfo } from '../../reduxStore';
import { useDispatch, useSelector } from 'react-redux';

const MenuContainer = styled.div`
    color: #2C3E50;
    display: flex;
    align-items: baseline;
`;

const MenuItem = styled.div`
    font-weight: bold;
    text-decoration: none;
    margin-right: 1.5em;
`;

const IconContainer = styled.div`
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    display: flex;
`;

const FirstNameOfUser = styled.div`
    font-weight: bold;
    margin-right: 0.3em;
`;

function MenuComponent({ content, to, onClick }) {

    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const userFirstName = useSelector((state) => state.user.userFirstName);

    useEffect(() => {
        if(token) {
            dispatch(getUserInfos({ token }))
                .then((action) => {
                    const { userFirstName } = action.payload;
                    dispatch(setUserInfo({userFirstName}));
                });
        }
    }, [dispatch, token, userFirstName]);

    return (
        <MenuContainer>
            <IconContainer>
                {token && (
                    <div>
                        <FontAwesomeIcon icon={faCircleUser} style={{color: '#2C3E50', }} />
                        <FirstNameOfUser>
                            {userFirstName}
                        </FirstNameOfUser>
                    </div>
                )}
                <FontAwesomeIcon icon={faRightFromBracket} style={{color: "#2C3E50",}} />
            </IconContainer>
            <Link to={to} onClick={onClick}>
                <MenuItem>{content}</MenuItem>
            </Link>
        </MenuContainer>
    )
}

export { MenuComponent };
