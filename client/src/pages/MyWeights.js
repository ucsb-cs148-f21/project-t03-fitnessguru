import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Weights from "../components/Weights";

export default function MyWeights() {
    const user = getUser();

    return (
        <Layout user={user}>
            <Container>
                <Weights />
            </Container>
        </Layout>
    );
}
