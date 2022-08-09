---
title: Schema roots
---

The schema roots for queries, mutations and subscriptions can be accessed using the `query`, `mutation` and `subscription` functions.

```typescript
import { $, query, mutation, subscription } from "./generated-api"

const entityMutation = mutation(m => [
  m.createSomeEntity({ entityData: $("dataVariable"); }, result => [
    result.id
  ])
]);

const entityQuery = query(q => [
  q.getEntity({ id: $("id"); }, result => [
    //
    result.id,
    result.name
  ])
]);

const entitySubscription = subscription(s => [
  s.onEntityChange({ id: $("id"); }, result => [
    //
    result.id,
    result.name
  ])
]);
```
