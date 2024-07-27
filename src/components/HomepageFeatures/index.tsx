import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

// import noMoreWatch = require('@site/static/img/no-more-watch.png')

type FeatureItem = {
  title: string
  extraStyle?: any
  Svg?: React.ComponentType<React.ComponentProps<"svg">>
  Png?: string
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Edit queries without recompiling",
    // Svg: require('@site/static/img/no-more-watch.svg').default,
    Png: require("@site/static/img/no-more-watch.png").default,
    extraStyle: {
      marginTop: "-60px",
      marginBottom: "-60px",
    },
    description: (
      <>
        Generate types from your schema once, then edit queries in pure TypeScript. No need to
        rebuild the types every time you change a query string.
      </>
    ),
  },
  {
    title: "Integrates with existing libraries",
    Svg: require("@site/static/img/all-clients.svg").default,
    description: (
      <>
        Its just a query builder - no network library dependencies. It produces a standard{" "}
        <code>TypedDocumentNode</code> which you can use with any client, such as{" "}
        <a href="https://www.apollographql.com/docs/react/">Apollo</a>,{" "}
        <a href="https://formidable.com/open-source/urql/docs/api/urql/">urql</a> or{" "}
        <a href="https://github.com/jasonkuhrt/graphql-request">graphql-request</a>
      </>
    ),
  },
  {
    title: "Advanced type inference",
    Svg: require("@site/static/img/type-inference.svg").default,
    description: (
      <>
        <code>typed-graphql-builder</code> can infer input types, output types and variable types,
        no matter what you throw at it! See the <a href="/docs/complex-example">complex example</a>{" "}
        for a taste of what it can do.
      </>
    ),
  },
]

function Feature({ title, Svg, Png, description, extraStyle }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} style={extraStyle || {}} role="img" />
        ) : (
          <img src={Png} style={extraStyle} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
