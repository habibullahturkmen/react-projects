import React, { useState } from "react";
import styled from "styled-components";
import Woman from "../img/excited-woman.png";
import AnimatedShapes from "./AnimatedShapes";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import MP4 from "../img/video/video.mp4";

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 50%;
    margin-top: 25px;
    position: relative;
`;

const Image = styled.img`
    display: ${props => { if (props.open) return "none" }};
    width: 100%;
`;

const Video = styled.video`
    display: ${props => { if (!props.open) return "none" }};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`;

const Right = styled.div`
    width: 50%;
    margin-top: 25px;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`

`;

const Description = styled.p`
    font-style: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Service = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Left>
                <Image open={open} src={Woman} />
                <Video open={open} autoPlay loop controls src={MP4} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Description>We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        develpment, lead generation and communications requirements. We work
                        with you, not for you. Although we have great resources.
                    </Description>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play} />
                        How it works
                    </Button>
                </Wrapper>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Service;