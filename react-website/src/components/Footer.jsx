import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 10%;
    background-color: #111;
    color: lightgray;
`;

const Wrapper = styled.div`
    padding: 35px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        padding: 20px 10px 10px 10px;
    }
    @media only screen and (max-width: 1280px) {
        padding: 30px 20px 20px 20px;
    }
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        margin-right: 10px;
        font-size: 14px;
    }
`;
const Copyright = styled.span`
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>Developer Ⓒ</Copyright>
            </Wrapper>
        </Container>
    );
};

export default Footer;