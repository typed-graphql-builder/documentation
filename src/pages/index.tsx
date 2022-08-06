import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

let inputTypescript = require("@site/static/img/input-typescript.png").default
let outputGraphql = require("@site/static/img/output-graphql.png").default

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        {/* <div className={styles.container}> */}
        <div className={styles.heroLeft}>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link className={`button ${styles.btnAction} button--lg`} to="/docs/intro">
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img
            src={inputTypescript}
            style={{ maxHeight: 320, marginRight: -50, marginLeft: -50 }}
          />
          <img src={outputGraphql} style={{ maxHeight: 344, marginTop: -12 }} />
        </div>
        {/* </div> */}
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
