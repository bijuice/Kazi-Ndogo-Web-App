import { useState, useEffect } from "react";
import {
  Columns,
  Form,
  Icon,
  Button,
  Heading,
  Notification,
} from "react-bulma-components";
import { Link, useHistory } from "react-router-dom";
import workerService from "../services/workers";

const { Field, Control, Label, Input, Textarea, Help, InputFile } = Form;

const Signup = () => {
  const [warning, setWarning] = useState("none");
  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [description, setDesc] = useState();
  const [workers, setWorkers] = useState();
  const [password, setPass] = useState();
  const [role, setRole] = useState();
  let history = useHistory();



  const handleNumChange = (event) => {
    setNumber(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const clickHandler = () => {
    if (typeof workers === "undefined") {
      var newWorker = {
        name: name,
        id: number,
        role: role,
        postive: 1,
        negative: 1,
        description: description,
        image:
          "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        password: "",
        reviews: []
      };

      workerService.create(newWorker);

      history.push("/")
    } else {
      setWarning("block");
    }
  };

  useEffect(() => {
    workerService
      .getAll()
      .then((response) =>
        setWorkers(response.find((person) => person.id === number))
      );
  }, [clickHandler]);

  return (
    <div>
      <Notification color="warning">
        <Heading size={6}>
          Already have an Account? <Link to="login">Log in now</Link>
        </Heading>
      </Notification>

      <Columns>
        <Columns.Column size="half" offset="one-quarter">
          <Notification color="light">
            <Field>
              <Label>Full Name</Label>
              <Control>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Control>
            </Field>

            <Field>
              <Label>Phone Number</Label>
              <Control>
                <Input
                  placeholder="Enter your phone number"
                  value={number}
                  onChange={handleNumChange}
                />
              </Control>
              <Help color="danger" style={{ display: warning }}>
                Phone number already in use.
              </Help>
            </Field>

            <Field>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={handlePassChange}
              ></Input>
            </Field>

            <Field>
              <Label>Role</Label>
              <Input
                placeholder="What type of job do you do?"
                value={role}
                onChange={handleRoleChange}
              ></Input>
            </Field>

            <Field>
              <Label>Description</Label>
              <Control>
                <Textarea
                  placeholder="Tell us about your work"
                  value={description}
                  onChange={handleDescChange}
                />
              </Control>
            </Field>
            <Field>
              <Label>Photo</Label>
              <Control>
                <InputFile
                  icon={<Icon icon="upload" />}
                  boxed
                  placeholder="Textarea"
                />
              </Control>
            </Field>
            <Field kind="group">
              <Control>
                <Button onClick={clickHandler}>Submit</Button>
              </Control>
            </Field>
          </Notification>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Signup;
