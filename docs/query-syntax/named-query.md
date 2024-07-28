---
title: Named query
---

For debugging and metric purposes, its useful to be able to give your query a name.

typed-graphql-builder offers simple and familiar syntax to do this

```typescript
import { $, query } from "./generated-api"

const countryQuery = query('CountryQuery', q => [
  q.countries({ filter: { continent: { eq: $("continentCode") } } }, c => [
    c.code,
    c.capital,
    c.name,
    c.languages(l => [l.name]),
  ]),
```

This will generate a named query

```graphql
query CountryQuery($continentCode: String) {
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