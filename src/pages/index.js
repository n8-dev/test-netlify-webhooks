import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Clock from "../components/Clock";
import StaticClock from "../components/StaticClock";

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <p>This should always have been deployed no longer than 15mins ago.</p>
        <Clock/>

        <StaticClock />
    </Layout>
);

export default IndexPage





// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home"/>
//     <Clock/>
//
//     <StaticClock date={process.env.MY_VAR_ENV}/>
//   </Layout>
// )