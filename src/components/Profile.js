import { Heading, Section, Notification } from "react-bulma-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import workerService from "../services/workers";

const Profile = () => {
  const [workers, setWorkers] = useState([]);
  const { number } = useParams();
  const newnum = number.replace(":", "");

  useEffect(() => {
    workerService
      .getAll()
      .then((response) =>
        setWorkers(response.find((person) => person.id === newnum))
      );
  }, []);

  return (
    <div>
      <Notification color="dark">
        <Heading size={5}>{workers.name}'s Profile</Heading>
      </Notification>

      <Section></Section>
    </div>
  );
};

export default Profile;
