import React from "react";
import styled from "styled-components";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

export default function Home() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>
          {
          (user != null)
          ? "Hello " + user.givenName + ", " 
          : ""
          }
          Welcome to Fitness Guru!
        </h1>
      </Container>
    </Layout>
  );
}
