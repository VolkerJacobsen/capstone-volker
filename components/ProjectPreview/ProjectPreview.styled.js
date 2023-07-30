import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledProjectContainer = styled.div`
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

export const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 5%;
`;

export const StyledLinkContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledFavoriteButton = styled.button`
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