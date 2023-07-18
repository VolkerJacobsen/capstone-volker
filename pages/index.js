import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function AboutUs() {
  return (
    <>
      <h1>About Us</h1>
      <ContentContainer>
        <StyledImage
          src="/about-us.jpg"
          alt="About us photo"
          width={670}
          height={400}
        ></StyledImage>
        <p>
          getInvolved is a community app where you can find detailed information
          about non-profit organizations in the Berlin area, where you can
          register for specific projects but also where you can start your own
          initiative. Founded in 2023, we are still in our infancy, but we are
          firmly convinced that we are stronger together. Especially in a big
          city like Berlin, which can seem cold and harsh, we should approach
          each other and support each other. Inclusion is a matter close to our
          hearts. For this reason, we welcome everyone, regardless of origin,
          gender or sexual orientation. We also expect this openness from our
          users. If you want to know more about us, have same feedback or want
          to engage with us please contact us.
        </p>
      </ContentContainer>
    </>
  );
}
