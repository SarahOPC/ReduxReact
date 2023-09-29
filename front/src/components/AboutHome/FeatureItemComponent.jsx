import styled from "styled-components";

const FeatureItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20em;
    height: 22em;
    margin-top: 2em;
`;

const FeatureItemIcon = styled.img`
    width: 6em;
    border: 0.6em solid #00bc77;
    border-radius: 50%;
    padding: 1.3em;
`;

const FeatureItemTitle = styled.p`
    font-size: 1.25em;
    font-weight: 700;
`;

const FeatureItemContent = styled.div`
    display: flex;
    text-align: center;
`;

function FeatureItemComponent(props) {
    return (
        <FeatureItemContainer>
            <FeatureItemIcon src = {props.icon.src} alt = {props.icon.alt} />
            <FeatureItemTitle>{props.title}</FeatureItemTitle>
            <FeatureItemContent>{props.content}</FeatureItemContent>
        </FeatureItemContainer>
    )
}

export { FeatureItemComponent };
