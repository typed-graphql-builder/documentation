---
title: Graphql Request
---

GraphQL Request is a minimal and lightweight GraphQL client that comes as a native ES6 module and has first class TypeScript support.

Among other things, its a convenient way to send GraphQL queries from Node.

Here is a simple node.js example utilizing ES6 syntax:

```typescript
// The below line is not a mistake
// TS will use the correct extension for types
import { query } from "./generated-api.js"; 
import { GraphQLClient } from "graphql-request";

const countriesQuery = query((q) => [
  q.countries((c) => [c.name({ lang: "en" }), c.capital, c.code]),
]);

const endpoint = "https://countries.trevorblades.com/";
const client = new GraphQLClient(endpoint);

const main = async function main() {
  let response = await client.request(countriesQuery);
  console.log(response.countries);
};
```
