import React from "react";
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
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  margin-left: 30px;
`;

export default function ProjectForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have successfully submitted your project!");
  };

  return (
    <div>
      <h1>Publish your project</h1>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <label>
            <p>Title: </p>
            <Input
              name="title"
              type="text"
              minlength="5"
              maxlength="20"
              required
            />
          </label>
          <label>
            <p>Short description: </p>
            <Textarea
              name="shortDescription"
              minlength="30"
              maxlength="100"
              required
            />
          </label>
          <label>
            <p>Long description: </p>
            <Textarea
              name="longDescription"
              minlength="50"
              maxlength="200"
              required
            />
          </label>
          <br />
          <br />
          <label>Select a category: </label>
          <Select name="category" required>
            <option value="Community">Community</option>
            <option value="Environment">Environment</option>
            <option value="Politics">Politics</option>
          </Select>
          <label>
            <p>Organizer: </p>
            <Input name="organizer" required />
          </label>
          <label>
            <p>Contact email: </p>
            <Input name="contact" type="email" required />
          </label>
        </Fieldset>
        <SubmitButton type="submit">Submit your project</SubmitButton>
      </Form>
    </div>
  );
}
