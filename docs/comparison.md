---
title: Comparison with other clients
sidebar_position: 40
---

This page compares `typed-graphql-builder` with [Zeus] and [tql], as those were the two libraries that served as the primary inspiration.

`typed-grapql-builder` owes much of its API design to [tql]. Although our
[initial design sketches][initial] predate it, `tql` is still the principal inspiration for
`typed-graphql-builder`'s API, especially variables, aliases and selections, with only a few
differences:

1. scalar fields can be selected without method calls i.e. `[t.id, t.name]` instead of `[t.id(), t.name()]`
2. the union selection method is called `$on` instead of `on` to more easily avoid conflict with
   existing field names
3. fragments are supported via the `fragment` function

In terms of capabilities, there is one notable difference

1. `typed-graphql-builer` can infer a variable placed anywhere in an input type.

The generated code is where most of the differences come from. Here, we took inspiration from the
way `graphql-zeus` provides a compact map of all input types. In this way, we reduce the generated
code size to ~ 25% of what `tql` generates.

The estimate is based on the Hasura generated schema of a large database included in the examples
(`x.graphql`)

| schema    | tql     | typed-graphql-builder |
| --------- | ------- | --------------------- |
| x.graphql | 3.43 MB | 0.71 MB               |

> note: generated with `tql` v1.0.0-rc.10 and `typed-graphql-builder` v1.3.1

[tql]: https://tql.dev
[zeus]: https://zeus.graphqleditor.com/
[initial]: https://github.com/hfour/gql-builder/blob/22a077aea0db71962ffcc2266e131fe159e14e57/src/builder-3.ts
