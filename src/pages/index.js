import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The web flat design framework`}
      description="Modern flat design framework for the web — inspired by Duolingo design system."
    >
      <main>
        <h1>Hello</h1>
      </main>
    </Layout>
  );
}
