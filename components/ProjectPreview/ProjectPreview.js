import { useFavorite } from "../Favorite/FavoriteContext";
import { useState, useEffect } from "react";
import { StyledProjectContainer, StyledImage, StyledLinkContainer, StyledLink, StyledFavoriteButton} from "./ProjectPreview.styled";

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
        <StyledFavoriteButton
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
        </StyledFavoriteButton>
        <StyledLink href={`/projects/${slug}`} $passHref>
          <StyledProjectContainer>
            <p className="category">{category}</p>
            <h2>{title}</h2>
            <StyledImage
              src={imageSource}
              alt={`Photo ${title} by ${organizer}`}
              width={670}
              height={400}
            />
            <p>{shortDescription}</p>
          </StyledProjectContainer>
        </StyledLink>
      </StyledLinkContainer>
    </>
  );
}
