import Image from "next/image";
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #faf8f7;
  margin: 10px 20px 10px 20px;
  padding: 0 10px 10px 10px;
  border-radius: 5%;
`;

const StyledImage = styled(Image)`
  margin-top: 10px;
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const ContactContainer = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EmailLink = styled.a`
  text-decoration: underline;
  color: #f18d9e;
  cursor: pointer;
`;

export default function AboutUs() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@getinvolved.com";
  };

  return (
    <>
      <StyledDiv>
        <HeaderText>About Us</HeaderText>
        <ContentContainer>
          <StyledImage
            src="/about-us.jpg"
            alt="About us photo"
            width={670}
            height={400}
          ></StyledImage>
          <section>
            <p>
              <strong>getInvolved</strong> is a community app where you can find
              detailed information about non-profit organizations in the Berlin
              area, where you can register for specific projects but also where
              you can start your own initiative.
            </p>
            <p>
              Founded in 2023, we are still in our infancy, but we are firmly
              convinced that we are stronger together. Especially in a big city
              like Berlin, which can seem cold and harsh, we should approach and
              support each other.
            </p>
            <p>
              Inclusion is a matter close to our hearts. For this reason, we
              welcome everyone, regardless of origin, gender or sexual
              orientation. We also expect this openness from our users. If you
              want to know more about us, have same feedback or want to engage
              with us please don´t hesitate to{" "}
              <EmailLink onClick={handleEmailClick}>contact</EmailLink> us.
            </p>
          </section>
          <ContactContainer>
            <p>
              <strong>email: </strong> info@getinvolved.com
            </p>
          </ContactContainer>
        </ContentContainer>
      </StyledDiv>
    </>
  );
}
