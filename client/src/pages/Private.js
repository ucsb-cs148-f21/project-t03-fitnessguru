import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";

export default function Login() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>This page is private!</h1>
        <div>(meaning you have to login to view the page)</div>
        <br />
      </Container>
    </Layout>
  );
}
