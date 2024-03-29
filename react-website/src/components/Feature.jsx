import React from "react";
import styled from "styled-components";
import Woman from "../img/business-woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;

const Left = styled.div`
    width: 50%;
    padding-right: 50px;
    margin-right: 50px;
    @media only screen and (max-width: 480px) {
        display: none;
    }
    @media only screen and (max-width: 1280px) {
        margin-top: 100px;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width: 480px) {
        font-size: 50px;
    }
`;

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`;

const Description = styled.p`
    font-style: 20px;
    color: #777;
    margin-top: 30px;
`;

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-top: 50px;
    }
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={Woman} />
            </Left>
            <Right>
                <Title>
                    <b>good</b> design<br />
                    <b>good</b> business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Description>We help our clients succeed by creating brand identities, digital
                    experiences, and print materials that communicate clearly, achieve
                    marketing goals, and look fantastic.
                </Description>
                <Description>
                    We care about your business and guarantee to achieve your marketing goals.
                </Description>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Feature;