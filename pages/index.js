import { StyledContentContainer, StyledImage, StyledHeaderText, StyledDiv, StyledContactContainer, StyledEmailLink} from "../components/StylesPages/index.styled";


export default function AboutUs() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@getinvolved.com";
  };

  return (
    <>
      <StyledDiv>
        <StyledHeaderText>About Us</StyledHeaderText>
        <StyledContentContainer>
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
              <StyledEmailLink onClick={handleEmailClick}>contact</StyledEmailLink> us.
            </p>
          </section>
          <StyledContactContainer>
            <p>
              <strong>email: </strong> info@getinvolved.com
            </p>
          </StyledContactContainer>
        </StyledContentContainer>
      </StyledDiv>
    </>
  );
}
