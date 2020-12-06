import {
  Form,
  Button,
  Notification,
  Heading,
  Columns,
} from "react-bulma-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import workerService from "../services/workers";

const { Field, Control, Label, Input } = Form;

const Login = () => {
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();
  const [workers, setWorkers] = useState();
  const [warning, setWarning] = useState("none");
  let history = useHistory();

  const handleNumChange = (event) => {
    setNumber(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const clickHandler = () => {
    if (workers.password !== password) {
      setWarning("block");
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    workerService
      .getAll()
      .then((response) =>
        setWorkers(response.find((person) => person.number === number))
      );
  }, [clickHandler]);

  return (
    <div>
      <Notification color="warning">
        <Heading size={6}>
          Don't have an account? <Link to="signup">Sign up now.</Link>
        </Heading>
      </Notification>
      <Notification color="danger" style={{ display: warning }}>
        <Heading size={6}>
          Incorrect username or password! Please try again.
        </Heading>
      </Notification>
      <Columns>
        <Columns.Column size="half" offset="one-quarter">
          <Notification color="light">
            <Field>
              <Label>Phone Number</Label>
              <Input
                value={number}
                placeholder="Enter your phone number"
                onChange={handleNumChange}
              ></Input>
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
              <Control>
                <Button onClick={clickHandler}>Log In</Button>
              </Control>
            </Field>
          </Notification>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Login;
