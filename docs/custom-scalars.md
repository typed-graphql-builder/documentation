---
sidebar_position: 35
title: Custom scalars
---

Custom scalars are supported through the `--scalar` CLI option.

The syntax is in the format

```
--scalar ScalarName=ScalarTypeSpec
```

### Specifying types

A type specification can be a simple built in TypeScript type like `unknown`. For example, to map all scalars of type `jsonb` to the `unknown` type, you would use

```
--scalar jsonb=unknown
```

The type can be imported from another file. The following example:

```
--scalar MyScalar=./scalars#SomeType
```

will add the following import

```typescript
import type { SomeType as MyScalar } from "./scalars"
```

and will ensure `MyScalar` is used everywhere the scalar is used in types.

### Specifying patterns

Instead of specifying each scalar by name, you can also use a regular expression pattern, e.g.

```
--scalar 'JSON.+=unknown`
```

will map all scalars that start with `JSON` to the type `unknown`

You can also use replacements for pattern capture groups found in `()` the type. Assuming you have the scalars `JSONDocument` and `JSONParagraph`, the following example:

```
--scalar 'JSON(.+)=./json-scalars#JSON$1'
```

will produce the imports

```typescript
import type { JSONDocument } from "./json-scalars"
import type { JSONParagraph } from "./json-scalars"
```

The order of patterns is important. You can specify a catch-all pattern at the end:

```
--scalar '.+=unknown'
```

Or you could specify some built-in scalars then map any remaining custom ones to a file. For example:

```
--scalar uuid=string --scalar timestamp=string --scalar timestamptz=string --scalar jsonb=unknown --scalar '(.+)=./scalars#$1'
```

will map all standard Hasura scalars to sensible types, then map any other scalars to imports
from `'./scalars'`. For example if you have a scalar `MyScalar`, the above will add the following import:

```typescript
import type { MyScalar } from "./scalars"
```

Despite that, Hasura's `timestamp` scalar will still map to a string.
