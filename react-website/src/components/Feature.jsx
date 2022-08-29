import React from "react";
import styled from "styled-components";
import Phone from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
    display: flex;
    margin-top: 150px;
`;

const Left = styled.div`
    width: 50%;
    padding-right: 50px;
    margin-right: 50px;
`;

const Image = styled.img`
    width: 100%;
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.span`
    font-size: 70px;
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
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={Phone} />
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