import {
  Columns,
  Form,
  Icon,
  Button,
  Section,
  Notification,
} from "react-bulma-components";
import { Link } from "react-router-dom";

const { Field, Control, Label, Input, Textarea, Help, InputFile } = Form;

const Signup = () => {
  return (
    <div>
      <Notification>
        Already have an Account? <Link to="login">Log in now</Link>
      </Notification>

      <Columns>
        <Columns.Column size="one-quarter"></Columns.Column>

        <Columns.Column size="one-half" color="primary">
          <Field>
            <Label>Full Name</Label>
            <Control>
              <Input placeholder="Text input" />
            </Control>
          </Field>

          <Field>
            <Label>Username</Label>
            <Control>
              <Input
                color="success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
            </Control>
            <Help color="success">This username is available</Help>
          </Field>

          <Field>
            <Label>Phone Number</Label>
            <Control>
              <Input
                color="danger"
                type="number"
                placeholder="Email input"
                value="07"
              />
            </Control>
            <Help color="danger">Phone number already in use</Help>
          </Field>
          <Field>
            <Label>Subject</Label>
          </Field>

          <Field>
            <Label>Description</Label>
            <Control>
              <Textarea placeholder="Tell us about your work" />
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

          <Field>
            <Control></Control>
          </Field>

          <Field kind="group">
            <Control>
              <Button type="primary">Submit</Button>
            </Control>
            <Control>
              <Button color="link">Cancel</Button>
            </Control>
          </Field>
        </Columns.Column>

        <Columns.Column size="one-quarter"></Columns.Column>
      </Columns>
    </div>
  );
};

export default Signup;
