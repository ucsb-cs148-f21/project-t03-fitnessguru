import React from "react";
import { useState } from "react";
import "bootstrap";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import ListSplits from "../components/Workout/ListSplits";
import ListSocialSplits from "../components/Workout/ListSocialSplits";

export default function SocialPage() {
    const user = getUser();
    return (
        <Layout user={user}>
            <Container>
                <h1>Splits created by other Users</h1>
                <ListSplits user={user} />
                {/* <ListSocialSplits user={user} /> */}
            </Container>
        </Layout>
    );
}
