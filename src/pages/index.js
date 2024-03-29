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
    <div className="Card">
      <p className="smalllang">{props.language}</p>
      <h3>{props.title}</h3>
      <Link to={`projects/${props.link}`}>
        Start
      </Link>
    </div >
  );
}

function TutorialCard(props) {
  return (
    <div className="Card">
      {props.disabled != false ? <img src={`${props.icon}`} className="disabled" alt={`${props.title} Logo`} /> : <img src={`${props.icon}`} alt={`${props.title} Logo`} />}
      <Link to={props.disabled != false ? `` : `learn/${props.link}`}>
        {props.disabled != false ? `Coming Soon` : `Learn`}
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
      <main className="spaceBottom">
        <div className="container-md">
          <center>
            <Tabs>
              <TabItem value="learn" label="Learn">
                <p>Learn Languages and Frameworks</p>
              <div id="projects" className="Box">
                  <TutorialCard title="Python" link="python/home" icon="/img/lang-logo/python.png" disabled={false} />
                  <TutorialCard title="HTML" icon="/img/lang-logo/html.png" />
                  <TutorialCard title="CSS" icon="/img/lang-logo/css.png" />
                  <TutorialCard title="JavaScript" icon="/img/lang-logo/js.png" />
                  <TutorialCard title="C" icon="/img/lang-logo/c.png" />
                  <TutorialCard title="C++" icon="/img/lang-logo/c++.png" />
                  <TutorialCard title="Java" icon="/img/lang-logo/java.png" />
                </div>
              </TabItem>
              <TabItem value="projects" label="Projects">
                <p>Upskill your coding skills with practical knowledge</p>
                <div id="projects" className="Box">
                  <ProjectCard title="Analog + Digital Clock" language="JavaScript" link="analog-clock/setup" />
                  <ProjectCard title="Email Extractor" language="JavaScript" link="email-extractor/setup" /> 
                </div>
              </TabItem>
            </Tabs>
          </center>
        </div>
      </main>
    </Layout>
  );
}
