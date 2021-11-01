import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Exercise from "../components/Exercise";

export default function MyExercises() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <Exercise />
      </Container>
    </Layout>
  );
}
