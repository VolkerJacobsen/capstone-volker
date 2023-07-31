import { useEffect, useState } from "react";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";
import { StyledHeaderText, StyledBackBox, StyledBox, StyledProjectListContainer, StyledNote } from "../../components/StylesPages/favorites.styled";


export default function Favorites({ projects }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localStorageFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(localStorageFavorites);
  }, []);

  const handleFavoriteToggle = (slug, isFavorite) => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = [...favorites, slug];
    } else {
      updatedFavorites = favorites.filter((favorite) => favorite !== slug);
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
    <StyledBackBox>
      <StyledBack />
      </StyledBackBox>
      <StyledHeaderText>My favorite projects</StyledHeaderText>
      <StyledBox>
        <StyledProjectListContainer>
          {favorites.length > 0 ? (
            favorites.map((slug) => {
              const project = projects.find((project) => project.slug === slug);
              if (project) {
                return (
                  <ProjectPreview
                    key={project.slug}
                    slug={project.slug}
                    category={project.category}
                    title={project.title}
                    imageSource={project.imageSource}
                    organizer={project.organizer}
                    shortDescription={project.shortDescription}
                    isFavorite={true}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                );
              }
              return null;
            })
          ) : (
            <StyledNote>No favorite projects yet.</StyledNote>
          )}
        </StyledProjectListContainer>
      </StyledBox>
    </>
  );
}
