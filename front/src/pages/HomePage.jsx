import styled from "styled-components";
import { BackgroundHomeComponent } from "../components/AboutBackground/BackgroundHomeComponent";
import { FeatureItemComponent } from "../components/AboutHome/FeatureItemComponent";
import chatIcon from '../assets/icon-chat.png';
import moneyIcon from '../assets/icon-money.png';
import securtityIcon from '../assets/icon-security.png';
import { FooterComponent } from "../components/AboutHeader&Footer/FooterComponent";
import { HeaderComponent } from "../components/AboutHeader&Footer/HeaderComponent";

const HomeContainer = styled.div`
`;

const HomeComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
        margin-left: 6em;
    }
`;

function HomePage() {

    const featureItensData = [
        {
            icon: { src: chatIcon, alt: "Chat Icon"},
            title: "You are our #1 priority",
            content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            icon: { src: moneyIcon, alt: "Money Icon"},
            title: "More savings means higher rates",
            content: "The more you save with us, the higher your interest rate will be!"
        },
        {
            icon: { src: securtityIcon, alt: "Security Icon"},
            title: "Security you can trust",
            content: "We use top of the line encryption to make sure your data and money is always safe."
        },
    ];
    return (
        <HomeContainer>
            <HeaderComponent to="/login" />
            <BackgroundHomeComponent />
            <HomeComponent>
                {featureItensData.map((item, index) => (
                    <FeatureItemComponent
                        key = {index}
                        icon = {item.icon}
                        title = {item.title}
                        content = {item.content}
                    />
                ))}
            </HomeComponent>
            <FooterComponent />
        </HomeContainer>
    )
}

export { HomePage };
