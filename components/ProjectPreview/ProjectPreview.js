import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useFavorite } from "../Favorite/FavoriteContext";
import { useState, useEffect } from "react";

const ProjectContainer = styled.div`
  background-color: #faf8f7;
  padding: 0 10px 10px 10px;
  border-radius: 5%;
  position: relative;
  border: 5px solid #a7c7e7;
  border-style: none none solid solid;

  .category {
    font-size: 20px;
    position: relative;
    bottom: 10px;
    left: 20px;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

const StyledLinkContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const FavoriteButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid #f18d9e;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ isFavorite }) => (isFavorite ? "#F18D9E" : "#A7C7E7")};
    transition: fill 0.3s ease-in-out;
  }
`;

export default function ProjectPreview({
  category,
  title,
  imageSource,
  organizer,
  shortDescription,
  slug,
}) {
  const { isFavorite, toggleFavorite } = useFavorite();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(slug));
  }, [isFavorite, slug]);

  const handleFavoriteToggle = () => {
    const newFavorite = !favorite;
    setFavorite(newFavorite);
    toggleFavorite(slug, newFavorite);
  };

  console.log("Rendering ProjectPreview with Slug:", slug);

  return (
    <>
      <StyledLinkContainer>
        <FavoriteButton
          onClick={handleFavoriteToggle}
          $isFavorite={favorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
            <path
              d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
              fill={favorite ? "#F18D9E" : "#A7C7E7"}
            />
          </svg>
        </FavoriteButton>
        <StyledLink href={`/projects/${slug}`} $passHref>
          <ProjectContainer>
            <p className="category">{category}</p>
            <h2>{title}</h2>
            <StyledImage
              src={imageSource}
              alt={`Photo ${title} by ${organizer}`}
              width={670}
              height={400}
            />
            <p>{shortDescription}</p>
          </ProjectContainer>
        </StyledLink>
      </StyledLinkContainer>
    </>
  );
}
