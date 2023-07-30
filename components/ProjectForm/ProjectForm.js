import { useState, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuidv4 } from "uuid";

const StyledFormContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  background-color: #faf8f7;
  margin: 20px;
  padding: 0 10px 10px 10px;
  border-radius: 5%;
`;
const StyledFieldset = styled.fieldset`
  border: none;
`;
const StyledSubmitButton = styled.button`
  color: #fff;
  border-radius: 100px;
  border: 0;
  padding: 5px 10px;
  margin: 10px auto 10px;
  cursor: pointer;
  background-color: #f18d9e;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;
const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;

  &::file-selector-input {
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid rgb(204 203 203);
    box-shadow: 1px 1px 1px 1px rgb(204 203 203);
    width: 100%;
  }
`;
const StyledTextarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
`;

const StyledSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  margin-left: 30px;
`;

export default function ProjectForm({ onAddProject, onCloseForm }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      if (imageFile) {
        formData.append("imageSource", imageFile);
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const cloudinaryResponse = await response.json();
        console.log("Cloudinary Response:", cloudinaryResponse);
        const imageSource = cloudinaryResponse.src;

        const slug = data.title.toLowerCase().replace(/\s+/g, "-");

        const newProjectId = uuidv4();

        const newProject = {
          id: newProjectId,
          title: data.title,
          slug: slug,
          shortDescription: data.shortDescription,
          longdescription: data.longDescription,
          category: data.category,
          organizer: data.organizer,
          contact: data.contact,
          imageSource: imageSource,
          width: 670,
          height: 400,
        };

        onAddProject(newProject);
        onCloseForm();
      } else {
        const { error } = await response.json();
        throw new Error(error);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to upload image or something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  function openSelectOptions() {
    setIsSelectOpen(true);
  }

  const textbox = useRef(null);

  function adjustHeight() {
    textbox.current.style.height = "inherit";
    textbox.current.style.height = `${textbox.current.scrollHeight}px`;
  }

  useLayoutEffect(adjustHeight, []);

  function handleKeyDown(e) {
    adjustHeight();
  }

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFieldset disabled={isSubmitting}>
          <label htmlFor="title">
            <p>Title: </p>
            <StyledInput
              name="title"
              type="text"
              minLength="5"
              maxLength="20"
              id="title"
              required
              placeholder="Enter your project title"
            />
          </label>
          <label htmlFor="imageSource">
            <p>Image: </p>
            <input
              type="file"
              name="imageSource"
              id="imageSource"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <label htmlFor="shortDescription">
            <p>Short description: </p>
            <StyledTextarea
              ref={textbox}
              onChange={handleKeyDown}
              name="shortDescription"
              id="shortDescription"
              minLength="30"
              maxLength="100"
              required
              placeholder="Enter a short description. Max. 100 characters."
            />
          </label>
          <label htmlFor="longDescription">
            <p>Long description: </p>
            <StyledTextarea
              ref={textbox}
              onChange={handleKeyDown}
              name="longDescription"
              id="longDescription"
              minLength="50"
              maxLength="200"
              required
              placeholder="Enter a long description. Max. 200 characters."
            />
          </label>
          <br />
          <br />
          <StyledSelectContainer>
            <label htmlFor="category_form" onClick={openSelectOptions}>
              Select a category:{" "}
            </label>
            <StyledSelect
              name="category"
              id="category_form"
              required={isSelectOpen}
            >
              <option value="Community">Community</option>
              <option value="Environment">Environment</option>
              <option value="Politics">Politics</option>
            </StyledSelect>
          </StyledSelectContainer>
          <label htmlFor="organizer">
            <p>Organizer:</p>
            <StyledInput
              type="text"
              name="organizer"
              id="organizer"
              required
              placeholder="Enter your organization"
            />
          </label>
          <label htmlFor="contact">
            <p>Contact email: </p>
            <StyledInput
              name="contact"
              id="contact"
              type="email"
              required
              placeholder="Enter your email-address"
            />
          </label>
        </StyledFieldset>
        <StyledSubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading project…" : "+ ADD PROJECT"}
        </StyledSubmitButton>
      </StyledForm>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </StyledFormContainer>
  );
}
