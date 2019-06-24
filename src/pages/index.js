import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Clock from "../components/Clock";
import StaticClock from "../components/StaticClock";

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <Clock/>

        <StaticClock date={new Date()}/>
    </Layout>
);

export default IndexPage

