import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";
import StyledBack from "../../components/StyledBackButton/StyledBackButton";

const HeaderText = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-left: 20px;
  margin-bottom: -20px;

  @media screen and (min-width: 769px) {
    font-size: 2rem;
  }
`;

const StyledBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const ProjectListContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledNote = styled.p`
  display: flex;
  justify-content: center;
`;

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
      <StyledBack />
      <HeaderText>My favorite projects</HeaderText>
      <StyledBox>
        <ProjectListContainer>
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
        </ProjectListContainer>
      </StyledBox>
    </>
  );
}
