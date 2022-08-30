import React, { useState } from "react";
import styled from "styled-components";
import Woman from "../img/excited-woman.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import MP4 from "../img/video/video.mp4";

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    margin-top: 25px;
    position: relative;
    @media only screen and (max-width: 480px) {
        display: none;
    }
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
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Right = styled.div`
    width: 50%;
    margin-top: 25px;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 480px) {
        padding: 20px;
    }
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

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
`;

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;

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
            {smallScreen && open && (
                <Modal>
                    <Video open={open} autoPlay loop controls src={MP4} />
                    <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
            {/* <AnimatedShapes /> */}
        </Container>
    );
};

export default Service;