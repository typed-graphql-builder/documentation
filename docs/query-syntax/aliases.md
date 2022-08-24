---
title: Aliases
---

Aliases are supported via the `.as` method - any field (including methods) can be renamed by
using `.as("newName")`

The following example assumes there is a `country` method at the toplevel query which fetches
a country by its code. We need to fetch two countries for a comparison

```typescript
let compareCountriesQuery = query(q => [
  q.country({ code: $("code1") }, c => [c.name, c.capital]).as("first"),
  q.country({ code: $("code2") }, c => [c.name, c.capital]).as("second"),
])
```

The response will have two properties: `first` and `second`, each containing a country
