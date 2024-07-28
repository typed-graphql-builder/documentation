---
title: All Fields
---

To make the field syntax easier to use, you can use a helper

# `all`

Here is an example:

```typescript
let compareCountriesQuery = query(q => [
  q.country({ code: $("code1") }, all)
])
```

This will select all country fields.

> Note: `all` will not call any methods that require arguments
