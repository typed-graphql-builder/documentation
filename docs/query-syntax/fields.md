---
title: Fields and field helpers
---

The standard syntax to select fields is to add them to the returned list result.

This page also lists additional field helpers below

# `all`

The `all` helper is a function that lets you select all fields for a given output

Here is an example:

```typescript
import { all } from './generated-api'

let compareCountriesQuery = query(q => [
  q.country({ code: $("code1") }, all)
])
```

This will select all country fields.

Note: `all` will not call any methods that require arguments. However, you can combine it
with additional selectors

```typescript
import { all } from './generated-api'

let compareCountriesQuery = query(q => [
  q.country({ code: $("code1") }, q => [
    q.additionalMethod({param: "value"}, res => [res.content]),
    ...all(q)
  ])
])
```
