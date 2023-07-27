import { useState } from "react";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuidv4 } from "uuid";

const Form = styled.form`
  background-color: #faf8f7;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
`;
const Fieldset = styled.fieldset`
  border: none;
`;
const SubmitButton = styled.button`
  color: #fff;
  font-size: 1.1em;
  border-radius: 100px;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 20px auto 20px;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

  &:hover {
    background-color: #d67c8c;
    color: black;
  }
`;
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
`;
const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
  font-family: system-ui;
`;
const Select = styled.select`
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
          longDescription: data.longDescription,
          category: data.category,
          organizer: data.organizer,
          contact: data.contact,
          imageSource: imageSource,
          width: 670,
          height: 400,
        };

        setProjects([...projects, newProject]);

        onAddProject(newProject);
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Fieldset disabled={isSubmitting}>
          <label htmlFor="title">
            <p>Title: </p>
            <Input
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
            <Textarea
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
            <Textarea
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
          <label htmlFor="category_form" onClick={openSelectOptions}>
            Select a category:{" "}
          </label>
          <Select name="category" id="category_form" required={isSelectOpen}>
            <option value="Community">Community</option>
            <option value="Environment">Environment</option>
            <option value="Politics">Politics</option>
          </Select>
          <label htmlFor="organizer">
            <p>Organizer:</p>
            <Input
              type="text"
              name="organizer"
              id="organizer"
              required
              placeholder="Enter your organization"
            />
          </label>
          <label htmlFor="contact">
            <p>Contact email: </p>
            <Input
              name="contact"
              id="contact"
              type="email"
              required
              placeholder="Enter your email-address"
            />
          </label>
        </Fieldset>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Uploading project…" : "+ ADD PROJECT"}
        </SubmitButton>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
