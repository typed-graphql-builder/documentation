---
title: Variables
---

typed-graphql-builder is capable of inferring the type of a variable based on its position in the
query. To add a variable to a query, we can use one of the following two functions exported by the
generated API

- `$` - the type of the variable will match the input type or argument type, exactly
  - If the input type or query argument type is non-null, the variable will forbid nulls
  - If the input type or query argument allows nulls, the variable will allow nulls as well
- `$$` - the variable will be non-null, regardles of whether the input is nullable

## Example:

Given a sample query, e.g.

```typescript
import { $, query } from "./generated-api"

const countryQuery = query(q => [
  q.countries({ filter: { continent: { eq: $("continentCode") } } }, c => [
    c.code,
    c.capital,
    c.name,
    c.languages(l => [l.name]),
  ]),
])
```

where the `continentCode` is nullable, the output GraphQL will be

```graphql
query ($continentCode: String) {
  countries(filter: { continent: { eq: $continentCode } }) {
    code
    capital
    name
    languages {
      name
    }
  }
}
```

and the TypeScript type of the variable `continientCode` will be `string | null | undefined`

However, if we use `$$` instead of `$`

```typescript
import { $, query } from "./generated-api"

const countryQuery = query(q => [
  q.countries({ filter: { continent: { eq: $$("continentCode") } } }, c => [
    c.code,
    c.capital,
    c.name,
    c.languages(l => [l.name]),
  ]),
])
```

We will get `String!` as the query variable type in the GraphQL output:

```graphql
query ($continentCode: String!) {
  countries(filter: { continent: { eq: $continentCode } }) {
    code
    capital
    name
    languages {
      name
    }
  }
}
```

and the TypeScript type of `continentCode` will be `string`
