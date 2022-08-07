---
sidebar_position: 1
---

# Getting started

> Note: This tutorial assumes you already have a graphql schema and client in place. If you'd like to create a new app, [please see this guide](sample-app.md)

The easiest way to try `typed-graphql-builder` is to use `npx`. Lets generate a TypeScript API
from the example countries schema schema:

```bash
npx typed-graphql-builder \
  --schema https://raw.githubusercontent.com/typed-graphql-builder/typed-graphql-builder/main/examples/countries-schema.graphql \
  --output generated-api.ts
```

> Note: You can pass a path to a local schema file or an URL

The generated API depends on two small dependencies, so you should add them to `package.json`

```json
"dependencies": {
  "@graphql-typed-document-node/core": "^3.1.1",
  "graphql-tag": "^2.12.6",
}
```

Now you can use the query builder in your app by importing `./generated-api.s`. Lets write a sample query:

```typescript
import { $, query } from "./generated-api"

const continentQuery = query(q => [q.continents({}, c => [c.name, c.code])])
```

This will generate a GraphQL query with the type:

```typescript
TypedDocumentNode<{continents: Array<{name: string, country: string}>}, {}>
```

that corresponds to the following GraphQL query:

```graphql
query {
  continents {
    name
    code
  }
}
```

Now if we wanted to add a query that takes the continent code as input and returns a list of
countries on that continent, we can do the following:

```typescript
import { $, query } from "../countries-schema"

const countryQuery = query(q => [
  q.countries({ filter: { continent: { eq: $("continentCode") } } }, c => [
    c.code,
    c.capital,
    c.name,
    c.languages(l => [l.name]),
  ]),
])
```

This will generate a typed document node that includes input variables

```typescript
TypedDocumentNode<{
  countries: Array<{
    code: string,
    name: string,
    capital: string,
    languages: Array<{name: string}>
  }>}, {
    continentCode: string
  }>
```

These queries can now be used in a component. For example, using Apollo's `useQuery`, we would get:

```typescript
const CountryListComponent = () => {
  const continents = useQuery(continentQuery)
  const [continent, setContinent] = useState("EU")

  const countryList = useQuery(countryQuery, {
    variables: {
      continent,
    },
  })

  // render the country list here
}
```
