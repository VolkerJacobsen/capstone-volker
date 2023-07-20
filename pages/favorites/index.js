import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import ProjectPreview from "../../components/ProjectPreview/ProjectPreview";

const HeaderText = styled.h1`
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
      <HeaderText>My favorite projects</HeaderText>
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
        <p>No favorite projects yet.</p>
      )}
    </>
  );
}
