import {
  Container,
  Form,
  Icon,
  Button,
  Section,
  Notification,
  Heading,
  Columns,
} from "react-bulma-components";
import { Link } from "react-router-dom";

const { Field, Control, Label, Input, Textarea, Help, InputFile } = Form;

const Login = () => {
  return (
    <div>
      <Notification color="warning">
        <Heading size={5}>
          Don't have an account? <Link to="signup">Sign up now.</Link>
        </Heading>
      </Notification>

      <Columns>
        <Columns.Column size="one-quarter"></Columns.Column>
        <Columns.Column size="half">
          <Notification color="primary">
            <Container>
              <Field>
                <Label>Phone Number</Label>
                <Input value="07"></Input>
              </Field>

              <Field>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                ></Input>
              </Field>

              <Field kind="group">
                <Control>
                  <Button type="submit">Log In</Button>
                </Control>
              </Field>
            </Container>
          </Notification>
        </Columns.Column>
        <Columns.Column size="one-quarter"></Columns.Column>
      </Columns>
    </div>
  );
};

export default Login;
