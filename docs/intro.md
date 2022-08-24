---
sidebar_position: 1
---

# Getting started

The easiest way to try `typed-graphql-builder` is to use `npx`. Lets generate a TypeScript API
from [Trevor Blades' example countries schema](https://countries.trevorblades.com/)

```bash
npx typed-graphql-builder \
  --schema https://countries.trevorblades.com \
  --output generated-api.ts
```

We're using the GraphQL introspection API to generate the schema. Alternatively we can pass a local path to a schema file i.e. `--schema ./my-schema.graphql`.

The command will generate the library `generated-api.ts`. You can use this library to build type-safe queries against the specified schema.

The typescript file `generated-api.ts` has two small dependencies:

- `@graphql-typed-document-node/core` - for the TypedDocumentNode types
- `graphql-tag` to build a TypedDocumentNode from a query string

You should add them to your project's `package.json`

```json
"dependencies": {
  "@graphql-typed-document-node/core": "^3.x1.1",
  "graphql-tag": "^2.12.6",
}
```

Now you can use the query builder in your app by importing `./generated-api.ts`.

## Writing queries

Lets write a simple query that fetches some data about continents from our API. To do that, we
can use the `query` function, which gives us access to the root `query` object of our schema. From
there, we can access the `countries` query and select two country fields: `name` and `code`:

```typescript
import { query } from "./generated-api"

const continentQuery = query(q => [
  q.continents(c => [
    //
    c.name,
    c.code,
  ]),
])
```

The above code will generate a query of type `TypedDocumentNode<{continents: Array<{name: string, country: string}>}, {}>` which corresponds to the following GraphQL query string:

```graphql
query {
  continents {
    name
    code
  }
}
```

Now if we wanted to add a query that takes the continent code as an input variable and returns a
list of countries on that continent, we can use the `$` helper from the generated API to specify
the variable name. The type will be inferred automatically for us:

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

This will generate `TypedDocumentNode<{ countries: Array<{...}>}, { continentCode: string }>`, a typed document node that includes the input variable `continentCode`.

The GraphQL version of the above query is shown below:

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

## Using queries

The queries written above can be used with any client library that supports TypedDocumentNode. For
example, if using Apollo's `useQuery`, we would write the following:

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

That's it! Feel free to explore the generated API further.
