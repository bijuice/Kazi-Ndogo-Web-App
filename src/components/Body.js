import {
  Card,
  Media,
  Heading,
  Content,
  Columns,
  Progress,
} from "react-bulma-components";
import { useState, useEffect } from "react";
import workerService from "../services/workers";
import { Link } from "react-router-dom";

const Body = () => {
  const [workers, setWorkers] = useState([]);


  useEffect(() => {
    workerService.getAll().then((response) => setWorkers(response));
  }, []);

  return (
    <div>
      <Columns>
        {workers.map((worker) => (
          <Cards key={worker.id} workers={worker} />
        ))}
      </Columns>
    </div>
  );
};

const Cards = ({ workers }) => {
  const total = workers.positive * 100 / (workers.positive + workers.negative);
  console.log(total)
  const processLink = (number) => {
    return `/profile/:${number}`;
  };

  return (
    <Columns.Column size="one-quarter">
      <Card>
        <Card.Image size="4by3" src={workers.image} />
        <Card.Content className="content">
          <Media>
            <Media.Item>
              <Heading size={4}>{workers.name}</Heading>
            </Media.Item>
          </Media>
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
              <b>Rating:</b>
            </Heading>
            <Progress
              max={100}
              value={total}
              color="success"
              size="medium"
            />
            <p>{total}% Positive Reviews</p>
          </Content>
        </Card.Content>
        <Card.Footer>
          <Link to={processLink(workers.id)}>
            <Card.Footer.Item>Get Number</Card.Footer.Item>
          </Link>
        </Card.Footer>
      </Card>
    </Columns.Column>
  );
};

export default Body;
