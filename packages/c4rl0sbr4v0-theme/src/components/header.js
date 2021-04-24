import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledImage src="https://cbravobernal.files.wordpress.com/2021/04/picture.png" loading="lazy" alt="Foto de Carlos Bravo Bernal" />
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  font-weight: normal;
`;

const Description = styled.h4`
  margin: 0;
  color: #000000;
  font-weight: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledImage = styled(Image)`
  border-radius: 36px;
  width: 60px;
  height: 64px;
`;
