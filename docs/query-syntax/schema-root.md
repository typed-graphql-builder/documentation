---
title: Schema roots
---

The schema roots for queries, mutations and subscriptions can be accessed using the `query`, `mutation` and `subscription` functions.

```typescript
import { $, mutation } from "./generated-api"

const entityMutation = query(m => [
  m.createSomeEntity({ entityData: $("dataVariable"); }, result => [
    result.id
  ])
]);
```
