import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";

export default function MyWorkouts() {
    const user = getUser();

    return (
        <Layout user={user}>
            <Container>
                <h1>This is the My Workouts page.</h1>
            </Container>
        </Layout>
    );
}
