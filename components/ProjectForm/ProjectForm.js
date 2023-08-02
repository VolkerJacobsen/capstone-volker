import { useState, useLayoutEffect, useRef } from "react";
import { StyledFormContainer, StyledForm, StyledFieldset, StyledSubmitButton, StyledInput, StyledTextarea, StyledSelectContainer, StyledSelect } from "./ProjectForm.styled";


export default function ProjectForm({ onAddProject, onCloseForm }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
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

      const cloudinaryResponse = await fetch("/api/upload", {
        method: "POST",
        body: imageFile,
      });

      if (!cloudinaryResponse.ok) {
        throw new Error("Failed to upload image to Cloudinary");
      }
      const {secure_url: imageSource, width, height} = await cloudinaryResponse.json();
      data.imageSource = imageSource;
      data.width = width;
      data.height = height;
    }

    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const newProject = await response.json();
      onAddProject(newProject);
      onCloseForm();
    } else {
          throw new Error("Failed to save project to MongoDB");
    }
    } catch (error) {
      setError("Failed to upload image or save project date to MongoDB");
    } finally {
      setIsSubmitting(false);
    }
  }
   

  function openSelectOptions() {
    setIsSelectOpen(true);
  }

  const shortDescriptionTextbox = useRef(null);
  const longDescriptionTextbox = useRef(null);

  function adjustHeight() {
    textbox.current.style.height = "inherit";
    textbox.current.style.height = `${textbox.current.scrollHeight}px`;
  }

  useEffect(() => {
    adjustHeight(shortDescriptionTextbox);
    adjustHeight(longDescriptionTextbox);
  }, []);

  function handleKeyDown(textboxRef) {
    adjustHeight(textboxRef);
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
              ref={shortDescriptionTextbox}
              onChange={(event) => handleKeyDown(event, shortDescriptionTextbox)}
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
              ref={longDescriptionTextbox}
              onChange={(event) => handleKeyDown(event, longDescriptionTextbox)}
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
