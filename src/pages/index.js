import React from "react";
import Layout from "@theme/Layout";
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <code className="hero__title">{siteConfig.title}</code>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <p className="smalllang">{props.language}</p>
      <h3>{props.title}</h3>
      <Link to={`projects/${props.link}`}>
        Start
      </Link>
    </div >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Import Coding is a website to help you import coding to your life!"
    >
      <HomepageHeader />
      <main>
        <div className="container-md">
          <center>
            <Tabs className="alitmcjcc">
              <TabItem value="projects" label="Projects">
                <div id="projects" className="projectBox">
                  {/* <ProjectCard title="Email Extractor" language="JavaScript" link="analog-clock/setup" />
                  <ProjectCard title="Standard Calculator" language="JavaScript" link="analog-clock/setup" />
                  <ProjectCard title="Tic Tac Toe Game" language="Java" link="analog-clock/setup" /> */}
                  <ProjectCard title="Analog Clock" language="JavaScript" link="analog-clock/setup" />
                </div>
              </TabItem>
              <TabItem value="tutorials" label="Tutorials">
                <h3>Hey, We are working on this section!</h3>
                <h4>Please check back later...</h4>
              </TabItem>
            </Tabs>
          </center>
        </div>
      </main>
    </Layout>
  );
}
