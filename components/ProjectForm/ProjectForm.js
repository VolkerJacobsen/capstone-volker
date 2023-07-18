import { useState } from "react";
import styled from "styled-components";

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
  border-radius: 100px 100px 100px 100px;
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #f18d9e;
  margin: 20px 20px 10px 50px;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
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
  const [imageFile, setImageFile] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        data.imageSource = reader.result;
        onAddProject(data);
      };
      reader.readAsDataURL(imageFile);
    } else {
      data.imageSource = "/placeholder-image.jpg";
      onAddProject(data);
    }
    event.target.reset();
    alert("You have successfully submitted your project!");
    onCloseForm();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  function openSelectOptions() {
    setIsSelectOpen(true);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
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
        <SubmitButton type="submit">Submit your project</SubmitButton>
      </Form>
    </div>
  );
}
