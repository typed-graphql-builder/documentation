---
title: Fields
---

# `all`

When selecting fields, you can use the `all` helper:

```typescript
let compareCountriesQuery = query(q => [
  q.country({ code: $("code1") }, all)
])
```

This will select all country fields. 

> Note: `all` will not call any methods that require arguments
