import {
  Heading,
  Button,
  Notification,
  Columns,
  Image,
  Content,
  Progress,
  Form,
} from "react-bulma-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import workerService from "../services/workers";
const { Field, Control, Label, Textarea, Input } = Form;

const Profile = () => {
  const [name, setName] = useState();
  const [success, setSuccess] = useState("none");
  const [workers, setWorkers] = useState();
  const [review, setReview] = useState();
  const { number } = useParams();
  const newnum = number.replace(":", "");

  useEffect(() => {
    workerService
      .getAll()
      .then((response) =>
        setWorkers(response.find((person) => person.id === newnum))
      );
  }, []);

  const handleRevChange = (event) => {
    setReview(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const posClick = () => {
    const changedVal = { ...workers, positive: workers.positive + 1 };
    workerService
      .update(newnum, changedVal)
      .then((response) => setWorkers(response));
  };

  const negClick = () => {
    const changedVal = { ...workers, negative: workers.negative + 1 };
    workerService
      .update(newnum, changedVal)
      .then((response) => setWorkers(response));
  };

  const reviewHandler = () => {
    const newReview = {
      ...workers,
      reviews: workers.reviews.concat({
        name: name,
        rev: review,
        id: workers.reviews.length + 1,
      }),
    };
    workerService
      .update(newnum, newReview)
      .then((response) => setWorkers(response));

    setName("");
    setReview("");

    setSuccess("block");
  };

  if (typeof workers !== "undefined") {
    return (
      <div>
        <Heading size={3}>{workers.name}'s Profile</Heading>
        <Notification color="dark">
          <Columns>
            <Columns.Column size="one-third">
              <Image src={workers.image} />
            </Columns.Column>
            <Columns.Column size="one-third">
              <Content color="primary">
                <Heading size={5}>
                  <b>Role: </b>
                  {workers.role}
                </Heading>
                <Heading size={5}>
                  <b>Description:</b>
                </Heading>
                <Heading size={6}>{workers.description}</Heading>
                <Heading size={5}>
                  <b>Phone number:</b>
                </Heading>
                <Heading size={6}>{workers.id}</Heading>
              </Content>
            </Columns.Column>

            <Columns.Column size="one-third">
              <Heading size={5}>
                <b>Rating:</b>
              </Heading>
              <Progress
                max={100}
                value={
                  (workers.positive * 100) /
                  (workers.positive + workers.negative)
                }
                color="success"
                size="medium"
              />
              <p>
                {(
                  (workers.positive * 100) /
                  (workers.positive + workers.negative)
                ).toFixed(1)}
                % Positive Reviews
              </p>

              <br />

              <Button.Group>
                <Button onClick={posClick}>Great Service!</Button>
                <Button onClick={negClick}>Bad Service!</Button>
              </Button.Group>
            </Columns.Column>
          </Columns>
        </Notification>

        <Heading size={4}>
          Did {workers.name} provide you with good service? You can leave a
          review below:
        </Heading>

        <Notification color="dark">
          <Notification color="success" style={{ display: success }}>
            <Heading size={6}>Review submitted!</Heading>
          </Notification>
          <Columns.Column size="12">
            <Field>
              <Heading size="5">Name:</Heading>
              <Input
                value={name}
                onChange={handleNameChange}
                placeholder="Please enter your name"
              />
            </Field>
            <br />

            <Field>
              <Heading size="5">Write a review:</Heading>
              <Control>
                <Textarea
                  placeholder="Tell us about the service you received"
                  value={review}
                  onChange={handleRevChange}
                />
              </Control>
            </Field>

            <Field>
              <Button onClick={reviewHandler}>Submit</Button>
            </Field>
          </Columns.Column>
        </Notification>

        <Heading size={4}>Reviews</Heading>

        <Columns.Column size="12">
          {workers.reviews.map((review) => (
            <Reviews key={review.id} review={review} />
          ))}
        </Columns.Column>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Reviews = ({ review }) => {
  return (
    <Notification color="dark">
      <Heading size={5}>{review.name}</Heading>
      <Heading size={6}>{review.rev}</Heading>
    </Notification>
  );
};

export default Profile;
