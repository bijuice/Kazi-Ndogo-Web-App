import {
  Heading,
  Columns,
  Section,
  Notification,
} from "react-bulma-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [workers, setWorkers] = useState([]);
  const [];

  useEffect(() => {
    workerService.getAll().then((response) => setWorkers(response));
  }, []);

  return (
    <Notification color="primary">
      <Heading size={5}>{workers.name}</Heading>
    </Notification>
  );
};

export default Profile;
