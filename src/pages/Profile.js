import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import ProfileComponent from "../components/Profile"

export default function Profile() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>{"Hello " + user.givenName + ", this is your Profile page!"}</h1>
        <br/>
        <ProfileComponent />
        <br/>
      </Container>
    </Layout>
  );
}
